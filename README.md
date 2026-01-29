# language.selector

Interactive language selector component for Shiny applications built with React.

## Installation

```r
# Install from GitHub
remotes::install_github("Barefoot-Ocean/language.selector")
```

## Usage

```r
library(shiny)
library(language.selector)

ui <- fluidPage(
  select_languageInput(
    inputId = "language",
    default_language = "en",
    languages = language.selector::languages
  ),
  textOutput("selected")
)

server <- function(input, output, session) {
  output$selected <- renderText({
    paste("Selected language:", input$language)
  })
}

shinyApp(ui, server)
```

## Features

- Responsive design: horizontal menu on desktop, modal popup on mobile/tablet
- Built-in flag icons for 10 languages
- Click outside to close on both desktop and mobile
- CSS class-based icons (easily extensible)
- Smooth animations

## Built-in Languages

| Code | Language | Flag |
|------|----------|------|
| en | English | England |
| ceb | Cebuano | Philippines |
| es | Spanish | Spain |
| fil | Filipino | Philippines |
| fr | French | France |
| id | Indonesian | Indonesia |
| mg | Malagasy | Madagascar |
| pt | Portuguese | Portugal |
| sw | Swahili | Tanzania |
| tet | Tetum | East Timor |

View all available flags:

```r
language.selector::language_flags
```

## Adding Custom Languages

Use `generate_icon_css()` to add custom language icons:
```r
# Generate CSS from your flag images
generate_icon_css(
  images_dir = "raw_flags",
  output_dir = "www/custom_flags",
  prefix = "language-flag-",
  mapping = list(
    "germany.png" = "de",
    "italy.png" = "it"
  )
)
```

Then include the CSS in your app:
```r
ui <- fluidPage(
  tags$head(
    tags$link(rel = "stylesheet", href = "custom_flags/custom-languages.css")
  ),
  select_languageInput(
    inputId = "language",
    default_language = "en",
    languages = list(
      list(name = "English", lang = "en", icon = "england.png"),
      list(name = "German", lang = "de", icon = "germany.png"),
      list(name = "Italian", lang = "it", icon = "italy.png")
    )
  )
)
```

## Updating from Server

```r
server <- function(input, output, session) {
  observeEvent(input$switch_lang, {
    updateSelect_languageInput(session, "language", value = "fr")
  })
}
```

## API Reference

### select_languageInput()

| Parameter | Description |
|-----------|-------------|
| `inputId` | The input slot for accessing the value |
| `default_language` | Default language code (e.g., "en") |
| `languages` | List of language configs with `name`, `lang`, `icon` |

### updateSelect_languageInput()

| Parameter | Description |
|-----------|-------------|
| `session` | Shiny session object |
| `inputId` | The input id to update |
| `value` | New language code |
| `configuration` | Optional new configuration |

## Development

Build the JavaScript bundle:

```bash
npm install
npm run build
```

Watch mode for development:

```bash
npm run watch
```

## License
MIT
