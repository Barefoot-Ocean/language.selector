library(shiny)
library(language.selector)


ui <- fluidPage(
  titlePanel("Example"),
  select_languageInput(
    "langInput",
    default_language = "en",
    languages = language.selector::languages,
    icons_path = 'icons',
    main_icon_path = 'languages.png'
  ),
  textOutput("textOutput")
)

server <- function(input, output, session) {

  output$textOutput <- renderText({
    sprintf("You entered: %s", input$langInput)
  })
}

shinyApp(ui, server)
