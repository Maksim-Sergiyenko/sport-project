const form = document.querySelector("form")

form.onsubmit = handleSubmit

function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData(form)
  const data = Object.fromEntries(formData)
  const json = JSON.stringify(data)
  const init = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: json
  }
  
  fetch("/api/registration", init)
} 
