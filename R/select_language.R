#' Language Selector Input
#'
#' Creates an interactive language selector component for Shiny applications.
#' Features a radial button that expands to show language options with flag icons.
#' Responsive design adapts to mobile (modal popup) and desktop (horizontal menu).
#'
#' Built-in language flag icons are automatically loaded via CSS classes.
#' Use \code{language_flags} to see available flags, or \code{\link{generate_icon_css}}
#' to add custom icons.
#'
#' @param inputId The input slot that will be used to access the value.
#' @param default_language The default selected language code (e.g., "en", "fr").
#' @param languages A list of language configurations. Each entry should have:
#'   \describe{
#'     \item{name}{Full language name}
#'     \item{lang}{Language code abbreviation (used as CSS class: language-flag-{lang})}
#'     \item{icon}{Icon filename (for reference, actual display uses CSS classes)}
#'   }
#'   Use \code{language.selector::languages} for built-in configuration.
#'
#' @return A Shiny input element that can be placed in UI definitions.
#'
#' @examples
#' \dontrun{
#' library(shiny)
#' library(language.selector)
#'
#' ui <- fluidPage(
#'   select_languageInput(
#'     inputId = "language",
#'     default_language = "en",
#'     languages = language.selector::languages
#'   ),
#'   textOutput("selected")
#' )
#'
#' server <- function(input, output, session) {
#'   output$selected <- renderText({
#'     paste("Selected language:", input$language)
#'   })
#' }
#'
#' shinyApp(ui, server)
#' }
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @seealso \code{\link{updateSelect_languageInput}} for updating the selector
#' @seealso \code{\link{languages}} for the built-in language configuration
#' @seealso \code{\link{language_flags}} for available flag icons
#' @seealso \code{\link{generate_icon_css}} for adding custom icons
#'
#' @export
select_languageInput <- function(inputId, default_language, languages) {

  # Single dependency with bundle, CSS, and icons
  bundle_dep <- htmltools::htmlDependency(
    name = "select_language-input",
    version = "1.0.0",
    src = c(file = "www/language.selector/main_bundle"),
    package = "language.selector",
    script = "bundle.js",
    stylesheet = "languages.css",
    all_files = TRUE
  )

  reactR::createReactShinyInput(
    inputId,
    "select_language",
    bundle_dep,
    default = default_language,
    list(languages = languages),
    htmltools::tags$span
  )
}

#' Update Language Selector Input
#'
#' Change the value or configuration of a language selector from the server.
#'
#' @param session The Shiny session object.
#' @param inputId The id of the input to update.
#' @param value The new selected language code.
#' @param configuration Optional list to update the configuration (languages).
#'
#' @return Called for side effects (updating the input).
#'
#' @examples
#' \dontrun{
#' server <- function(input, output, session) {
#'   observeEvent(input$switch_to_french, {
#'     updateSelect_languageInput(session, "language", value = "fr")
#'   })
#' }
#' }
#'
#' @seealso \code{\link{select_languageInput}} for creating the selector
#'
#' @export
updateSelect_languageInput <- function(session, inputId, value, configuration = NULL) {
  message <- list(value = value)
  if (!is.null(configuration)) {
    message$configuration <- configuration
  }
  session$sendInputMessage(inputId, message)
}
