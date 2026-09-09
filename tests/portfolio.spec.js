import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('renders without runtime errors and fits small and large screens', async ({ page }) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Criatividade')
  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true)
  }
  expect(errors).toEqual([])
})

test('filters projects, expands details and selects the matching demo', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Interativos', exact: true }).click()
  await expect(page.locator('.project-card')).toHaveCount(1)
  await page.locator('.project-details summary').click()
  await expect(page.locator('.project-details')).toHaveAttribute('open', '')
  await page.getByRole('link', { name: 'Testar aqui' }).click()
  await expect(page.getByRole('tab', { name: /Jogo da Adivinhação/ })).toHaveAttribute(
    'aria-selected',
    'true',
  )
  await expect(page.locator('iframe')).toHaveCount(0)
  await page.route('https://prediin.github.io/**', (route) =>
    route.fulfill({ contentType: 'text/html', body: '<h1>Demo fixture</h1>' }),
  )
  await page.getByRole('button', { name: 'Iniciar experiência' }).click()
  await expect(page.locator('iframe')).toHaveAttribute('src', /jogoDeAdivinhacao/)
  await page.getByRole('button', { name: 'Mobile', exact: true }).click()
  await expect(page.locator('.browser-demo__viewport')).toHaveClass(/is-mobile/)
  await page.getByRole('tab', { name: /Jogo da Adivinhação/ }).focus()
  await page.keyboard.press('ArrowLeft')
  await expect(page.getByRole('tab', { name: /Portfólio de Editor de Vídeo/ })).toBeFocused()
  await expect(page.locator('iframe')).toHaveCount(0)
})

test('mobile menu closes with Escape and after navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const menu = page.getByRole('button', { name: 'Abrir menu' })
  await menu.click()
  await expect(page.getByRole('navigation')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(menu).toBeFocused()
  await expect(page.getByRole('navigation')).toBeHidden()
  await menu.click()
  await page.getByRole('navigation').getByRole('link', { name: 'Sobre mim' }).click()
  await expect(page.getByRole('navigation')).toBeHidden()
  await expect(page).toHaveURL(/#experiencia$/)
})

test('validates contact and builds the chosen message without sending it', async ({ page }) => {
  await page.goto('/')
  await page.evaluate(() => {
    window.open = (url) => {
      window.preparedMessage = url
    }
  })
  await page.getByRole('button', { name: 'Preparar mensagem' }).click()
  expect(await page.evaluate(() => window.preparedMessage)).toBeUndefined()
  await page.getByLabel('Seu nome').fill('Ana & Equipe')
  await page.getByLabel('Empresa', { exact: true }).fill('Studio')
  await page.getByLabel('Sua mensagem').fill('Gostaria de conversar sobre uma vaga React.')
  await page.getByRole('button', { name: 'Preparar mensagem' }).click()
  const href = await page.evaluate(() => window.preparedMessage)
  expect(href).toContain('https://wa.me/5589999877756')
  expect(new URL(href).searchParams.get('text')).toContain('Ana & Equipe')
  expect(new URL(href).searchParams.get('text')).toContain('Oportunidade de trabalho')
})

test('reveals curriculum and respects reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await page.getByText('Explorar os 16 módulos').click()
  await expect(page.locator('.competency-item')).toHaveCount(16)
  await expect(page.locator('.competency-item').last()).toBeVisible()
  expect(
    await page.locator('.sample-symbol').evaluate((el) => getComputedStyle(el).animationName),
  ).toBe('none')
})

test('has no automated WCAG A/AA violations on desktop or mobile', async ({ page }) => {
  await page.goto('/')
  for (const [width, theme] of [
    [1440, 'dark'],
    [390, 'dark'],
    [1440, 'light'],
    [390, 'light'],
  ]) {
    await page.evaluate((value) => {
      document.documentElement.dataset.theme = value
    }, theme)
    await page.setViewportSize({ width, height: 900 })
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze()
    expect(
      result.violations.map((item) => ({
        id: item.id,
        nodes: item.nodes.map((node) => ({ target: node.target, failure: node.failureSummary })),
      })),
    ).toEqual([])
  }
})

test('uses the original logo and remembers theme and animation preferences', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/')
  await expect(page.locator('link[rel="icon"]')).toHaveAttribute('href', './brand-logo.png')
  const logo = page.locator('.site-header .brand img')
  await expect(logo).toHaveAttribute('src', /brand-logo\.png$/)
  expect(await logo.evaluate((image) => image.complete && image.naturalWidth > 0)).toBe(true)
  await page.getByRole('button', { name: 'Ativar modo claro' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await page.getByRole('button', { name: 'Pausar animações' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'paused')
  expect(
    await page
      .locator('.sample-symbol')
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe('none')
  await page.reload()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await expect(page.getByRole('button', { name: 'Pausar animações' })).toHaveAttribute(
    'aria-pressed',
    'true',
  )
  await page.getByRole('button', { name: 'Ativar modo escuro' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark')
})

test('responds to interaction and tracks real section visits', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await page.getByRole('button', { name: 'Testar interação' }).click()
  await expect(page.locator('.studio-caption [role="status"]')).toContainText(
    'Conexão estabelecida',
  )
  for (const id of ['top', 'projetos', 'live-lab', 'formacao', 'experiencia', 'contato']) {
    await page
      .locator(`#${id}`)
      .evaluate((element) => element.scrollIntoView({ behavior: 'instant', block: 'start' }))
    await expect(
      page
        .locator(`.exploration__bar i`)
        .nth(['top', 'projetos', 'live-lab', 'formacao', 'experiencia', 'contato'].indexOf(id)),
    ).toHaveClass('is-complete')
  }
  await expect(page.getByRole('progressbar', { name: 'Seções visitadas' })).toHaveAttribute(
    'aria-valuenow',
    '6',
  )
})

test('theme controls work when localStorage is unavailable', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, 'localStorage', {
      get() {
        throw new DOMException('Storage blocked', 'SecurityError')
      },
    })
  })
  await page.emulateMedia({ colorScheme: 'dark' })
  await page.goto('/')
  await page.getByRole('button', { name: 'Ativar modo claro' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light')
  await page.getByRole('button', { name: 'Pausar animações' }).click()
  await expect(page.locator('html')).toHaveAttribute('data-motion', 'paused')
})

test('creative studio changes the actual card and exposes matching CSS', async ({ page }) => {
  await page.goto('/')
  await page.getByRole('button', { name: 'Lavanda', exact: true }).click()
  await expect(page.locator('.studio-sample')).toHaveCSS('background-color', 'rgb(212, 196, 251)')
  await page.getByRole('slider', { name: 'Arredondamento dos cantos' }).fill('32')
  await expect(page.locator('.studio-sample')).toHaveCSS('border-radius', '32px')
  await page
    .getByRole('group', { name: 'Visualização do estúdio' })
    .getByRole('button', { name: 'Código' })
    .click()
  await expect(page.locator('.studio-code')).toContainText('#d4c4fb')
  await expect(page.locator('.studio-code')).toContainText('32px')
  await page
    .getByRole('group', { name: 'Visualização do estúdio' })
    .getByRole('button', { name: 'Interface' })
    .click()
  await expect(page.locator('.studio-sample')).toHaveCSS('border-radius', '32px')
})

test('shows the resume portrait and switches between personal stories', async ({ page }) => {
  await page.goto('/')
  const portrait = page.getByRole('img', { name: 'Retrato de Pedro Luis Bezerra Lima' })
  await portrait.scrollIntoViewIfNeeded()
  await expect(portrait).toHaveAttribute('src', /pedro-luis-retrato.jpeg$/)
  await expect
    .poll(() => portrait.evaluate((image) => image.complete && image.naturalWidth === 391))
    .toBe(true)
  await page.getByRole('button', { name: 'Como trabalho', exact: true }).click()
  await expect(page.locator('.about-story__text')).toContainText('O atendimento ao cliente')
  await page.getByRole('button', { name: 'Além do código', exact: true }).click()
  await expect(page.locator('.about-story__text')).toContainText('produção audiovisual')
  await page.getByRole('button', { name: 'Minha história', exact: true }).click()
  await expect(page.locator('.about-story__text')).toContainText('Corrente, no Piauí')
})
