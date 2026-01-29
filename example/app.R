library(shiny)
library(language.selector)

ui <- fluidPage(
  titlePanel("Language Selector Example"),

  # Icons are bundled - just pass languages
  select_languageInput(
    inputId = "langInput",
    default_language = "en",
    languages = language.selector::languages
  ),

  hr(),
  h4("Selected Language:"),
  textOutput("textOutput"),

  hr(),
  h4("Available Language Flags:"),
  verbatimTextOutput("flagsOutput")
)

server <- function(input, output, session) {

  output$textOutput <- renderText({
    sprintf("Language code: %s", input$langInput)
  })

  output$flagsOutput <- renderPrint({
    language.selector::language_flags
  })
}

shinyApp(ui, server)
