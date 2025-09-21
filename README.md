# Spicetify-bg-image
# Spicetify Theme

A custom CSS theme for [Spicetify](https://github.com/spicetify/spicetify-cli) that gives Spotify a sleek, modern look with transparent backgrounds, improved sidebar, and refined UI elements.

---

## Features

- Transparent sidebar and top bar
- Custom icon sizes and colors
- Improved playlist and library layouts
- Animated hover effects on cards
- Consistent spacing and alignment
- Optional tweaks for lyrics, marketplace, and more

---

## Installation

1. **Install Spicetify CLI**  
   Follow the [official Spicetify installation guide](https://github.com/spicetify/spicetify-cli/wiki/Installation).

2. **Download the Theme**  
   Save the user.css file to a folder, e.g.:
   ```
   C:\Users\<your-username>\AppData\Roaming\spicetify\Themes\Galaxy\
   ```

3. **Configure Spicetify to Use the Theme**
   - Open a terminal and run:
     ```
     spicetify config current_theme Galaxy
     spicetify config color_scheme user
     ```
   - Copy your `user.css` into the theme folder if not already there.

4. **Apply the Theme**
   ```
   spicetify apply
   ```

---

## Customization

- Edit `user.css` to tweak colors, spacing, or features as you like.
- Reload Spotify or run `spicetify apply` after making changes.

---

## Troubleshooting

- If UI elements overlap or look broken, make sure you have the latest Spicetify and Spotify versions.
- Restore the default theme by running:
  ```
  spicetify config current_theme SpicetifyDefault
  spicetify apply
  ```

---

## Credits

Tweaked by SpeedBP.  

---

Enjoy your new Spotify look!
