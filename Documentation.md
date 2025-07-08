# Documentation.md

---

## app.json explicativo

{
  "expo": {
    "name": "links",
    "slug": "links",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/images/icon.png", // aqui o endereço da imagem do icone
    "scheme": "links",
    "userInterfaceStyle": "automatic", // aqui podemos deixar no aujtomatico ou especifivcar dark ou light... Isso altera o statusbar do celular, por exemplo, o simbolos como bateriam ficam claros ou escuros.
    "newArchEnabled": true,
    "splash": {
      "image": "./assets/images/splash-icon.png", // aqui o endereço da imagem do splash
      "resizeMode": "contain",
      "backgroundColor": "#09090B" // aqui cor de fundo do splash
    },
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/images/adaptive-icon.png", // aqui o endereço da imagem do adaptiveIcon
        "backgroundColor": "#09090B" // aqui a cor de fundo do adaptiveIcon
      },
      "edgeToEdgeEnabled": true
    },
    "web": {
      "bundler": "metro",
      "output": "static",
      "favicon": "./assets/images/favicon.png"
    },
    "plugins": [
      "expo-router"
    ],
    "experiments": {
      "typedRoutes": true
    }
  }
}
