# 🚀 Gelo's_Portfolio_v1.0

![License](https://img.shields.io/badge/license-MIT-cyan?style=flat-square)

> **Status:** MISSION ONLINE  
> **Pilot:** Angelo Econ   
> **Deployment:** [angeloecon-portfolio](https://angeloecon-portfolio.vercel.app)


## 🛠 System Specifications (Tech Stack)
* **Core:** [Next.js 16](https://nextjs.org/)  
* **Styling:** [Tailwind CSS v4](https://tailwindcss.com/blog/tailwindcss-v4)
* **Physics:** HTML5 Canvas API (Custom Starfield Engine)
* **Animation:** [Framer Motion](https://motion.dev/) 


## 📁 Project Structure
```
📦src
 ┣ 📂app
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.js
 ┃ ┗ 📜page.js
 ┣ 📂components
 ┃ ┣ 📂Cards
 ┃ ┃ ┣ 📜EduCard.js
 ┃ ┃ ┣ 📜HoloCard.js
 ┃ ┃ ┣ 📜ProjectCard.js
 ┃ ┃ ┗ 📜WorkExCard.js
 ┃ ┣ 📂Icons
 ┃ ┃ ┣ 📜CloseIcon.js
 ┃ ┃ ┣ 📜GradHatIcon.js
 ┃ ┃ ┣ 📜HamburgerIcon.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜ShardIcon.js
 ┃ ┣ 📂Sections
 ┃ ┃ ┣ 📜AboutSection.js
 ┃ ┃ ┣ 📜EducationSection.js
 ┃ ┃ ┣ 📜HeroSection.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜ProjectsSection.js
 ┃ ┃ ┗ 📜WorkExperienceSection.js
 ┃ ┣ 📂Title
 ┃ ┃ ┗ 📜SectionTitleHeader.js
 ┃ ┗ 📂UI
 ┃ ┃ ┣ 📜Footer.js
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┣ 📜NavigatorGem.js
 ┃ ┃ ┣ 📜SpaceAudioButton.js
 ┃ ┃ ┣ 📜SpaceCursor.js
 ┃ ┃ ┣ 📜SpaceNav.js
 ┃ ┃ ┗ 📜Starfield.js
 ┗ 📂hooks
 ┃ ┗ 📜useSpaceAudio.js
 ```

## 🛸 Key Features (Ship Modules)
### 1. The Warp Engine (`Starfield.js`)
A custom-written Canvas 2D simulation that generates 800 individual stars and can be adjusted.
`const starCount = 800;`

### 2. Procedural Audio (`SpaceAudio.js`)
**Zero audio files were used.** The engine hum and UI beeps are generated in real-time using the browser's `AudioContext`.
* **Engine:** Brown noise generator with Lowpass Filter.
* **UI:** Sine and Square wave oscillators for button interaction

### 3. Holographic UI (`HoloCard.js`)
A reausable card that uses Tailwind v4's new engine to create glassmorphism effects, scanning grid animations, and glowing borders that react to user interaction.

### 4. Navigator Gem
A 3D CSS construct that acts as a coding companion, floating in 3D space using `transform-style: preserve-3d`.

## 🔧 Available Scripts
* `npm run dev` - Start dev server.
* `npm run build` - Build production.
* `npm run start` - Start prod server.


## ⚖️ License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Note:** The MIT License applies to the source code (React components, CSS, Audio Engine). 
The content (images, project descriptions, personal bio) is ©Angelo Econ and may not be used without permission.
Please do not clone this website and deploy it as your own portfolio without significant changes.



The contect mentioned above can be edited through 
* `/public/Images` - For Static Images 
* `/components/Sections` - To edit personal bio, project description, etc.


## 👨‍🚀 Flight Manual (Installation)

To launch this vessel on your local machine:

```bash
# 1. Clone the repository
git clone https://github.com/angeloecon/angelo-web-portfolio

# 2. Enter the directory
cd space-portfolio

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
```

## 🤝 Mission Support (Contributing)
If you wish to propose a system upgrade:

1. Fork the repository
2. Create a feature branch `git checkout -b feature/upgrade`
3. Commit your changes `git commit -m 'Optimized rendering core'`
4. Push to the branch `git push origin feature/warp-drive-upgrade`
5. Open a Pull Request
 
