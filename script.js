// ===== Theme toggle =====
const html = document.documentElement
const themeButton = document.getElementById('themeToggle')
const themeIcon = themeButton.querySelector('.theme-icon')

function applyTheme(theme) {
  html.dataset.theme = theme
  const isDark = theme === 'dark'
  themeIcon.textContent = isDark ? '☀️' : '🌙'
  themeButton.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme')
}

// remember the choice between visits
let savedTheme = null
try { savedTheme = localStorage.getItem('theme') } catch (e) {}
applyTheme(savedTheme || 'light')

themeButton.addEventListener('click', () => {
  const next = html.dataset.theme === 'dark' ? 'light' : 'dark'
  applyTheme(next)
  try { localStorage.setItem('theme', next) } catch (e) {}
})

// ===== Mobile menu =====
const menuButton = document.getElementById('menuToggle')
const nav = document.getElementById('siteNav')

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open')
  menuButton.setAttribute('aria-expanded', isOpen)
})

// close the menu after clicking a link
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open')
    menuButton.setAttribute('aria-expanded', 'false')
  })
})

// ===== Contact form validation =====
const form = document.getElementById('contactForm')
const successMessage = document.getElementById('formSuccess')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function showError(input, message) {
  const field = input.closest('.field')
  const errorEl = document.getElementById(input.id + '-error')
  if (message) {
    field.classList.add('invalid')
    input.setAttribute('aria-invalid', 'true')
  } else {
    field.classList.remove('invalid')
    input.removeAttribute('aria-invalid')
  }
  errorEl.textContent = message
}

form.addEventListener('submit', (event) => {
  event.preventDefault() // no page reload
  successMessage.textContent = ''

  const name = form.elements.name
  const email = form.elements.email
  const message = form.elements.message
  let firstInvalid = null

  // name
  if (name.value.trim() === '') {
    showError(name, 'Please enter your name.')
    firstInvalid = firstInvalid || name
  } else {
    showError(name, '')
  }

  // email: empty and wrong format get different messages
  if (email.value.trim() === '') {
    showError(email, 'Please enter your email address.')
    firstInvalid = firstInvalid || email
  } else if (!emailPattern.test(email.value.trim())) {
    showError(email, 'This email looks wrong. Use the format name@example.com.')
    firstInvalid = firstInvalid || email
  } else {
    showError(email, '')
  }

  // message
  if (message.value.trim() === '') {
    showError(message, 'Please write a message.')
    firstInvalid = firstInvalid || message
  } else {
    showError(message, '')
  }

  if (firstInvalid) {
    firstInvalid.focus()
    return
  }

  successMessage.textContent = `Thank you, ${name.value.trim()}! Your message has been received.`
  form.reset()
})