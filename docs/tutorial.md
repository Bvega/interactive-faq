# Interactive FAQ - Step-by-Step Tutorial

This tutorial guides you through building an interactive FAQ section using HTML, CSS, and JavaScript with Git and GitHub for version control and deployment.

---

## 🛠️ Step 1: Project Setup

```bash
mkdir interactive-faq
cd interactive-faq
git init
touch index.html
```

**Edit `index.html` with basic structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Interactive FAQ</title>
</head>
<body>
</body>
</html>
```

**Commit:**

```bash
git add index.html
git commit -m "Initial project setup with basic HTML structure"
```

---

## 🧱 Step 2: Add FAQ HTML Structure

Update `index.html`:

```html
<body>
  <div id="faq-container">
    <div class="faq-item">
      <div class="question">What is JavaScript?</div>
      <div class="answer">JavaScript is a programming language for the web.</div>
    </div>
    <div class="faq-item">
      <div class="question">What is the DOM?</div>
      <div class="answer">The DOM is the Document Object Model.</div>
    </div>
    <div class="faq-item">
      <div class="question">What is event delegation?</div>
      <div class="answer">Event delegation is a technique for handling events efficiently.</div>
    </div>
  </div>
  <button id="reset-button">Reset All</button>
</body>
```

**Commit:**

```bash
git add index.html
git commit -m "Add FAQ entries and reset button in HTML"
```

---

## 🎨 Step 3: Add External CSS Styling

```bash
touch style.css
```

**style.css**:

```css
body {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 2rem auto;
  padding: 1rem;
  background-color: #f9f9f9;
}

.faq-item {
  margin-bottom: 1rem;
}

.question {
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 0.5rem;
  text-decoration: underline;
}

.answer {
  display: none;
  margin-left: 1rem;
  transition: all 0.3s ease;
}

#reset-button {
  display: block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

#reset-button:hover {
  background-color: #0056b3;
}
```

Update `index.html` to link CSS:

```html
<link rel="stylesheet" href="style.css">
```

**Commit:**

```bash
git add index.html style.css
git commit -m "Separate CSS into style.css and link it in index.html"
```

---

## ⚙️ Step 4: Add JavaScript Logic

```bash
touch script.js
```

**script.js**:

```js
const faqContainer = document.getElementById('faq-container');
const resetButton = document.getElementById('reset-button');

faqContainer.addEventListener('click', (event) => {
  if (event.target.classList.contains('question')) {
    const allAnswers = faqContainer.querySelectorAll('.answer');

    if (event.shiftKey) {
      const anyVisible = Array.from(allAnswers).some(ans => ans.style.display === 'block');
      allAnswers.forEach(ans => {
        ans.style.display = anyVisible ? 'none' : 'block';
      });
    } else {
      const answer = event.target.nextElementSibling;
      answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    }
  }
});

resetButton.addEventListener('click', () => {
  const allAnswers = faqContainer.querySelectorAll('.answer');
  allAnswers.forEach(ans => {
    ans.style.display = 'none';
  });
});
```

Update `index.html` to include script:

```html
<script src="script.js"></script>
```

**Commit:**

```bash
git add index.html script.js
git commit -m "Add JavaScript interactivity for FAQ with event delegation and reset functionality"
```

---

## 🚀 Step 5: Push to GitHub

Create a repo on GitHub, then:

```bash
git remote add origin https://github.com/your-username/interactive-faq.git
git branch -M main
git push -u origin main
```

**Optional Commit:**

```bash
git commit --allow-empty -m "Connect local project to GitHub remote repository"
```

---

## 🌐 Step 6: Deploy with GitHub Pages

Go to **Settings > Pages** in your repo and:

* Set Source to `main`, folder to `/root`
* Save
* Open the generated URL like `https://your-username.github.io/interactive-faq/`

---

You’ve now built, committed, and deployed a complete beginner-friendly interactive FAQ app! ✅
