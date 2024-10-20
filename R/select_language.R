#' Select Lanugage
#'
#' Select Lanugage
#'
#' @importFrom reactR createReactShinyInput
#' @importFrom htmltools htmlDependency tags
#'
#' @export
select_languageInput <- function(inputId, default_language, languages, icons_path, main_icon_path) {
  reactR::createReactShinyInput(
    inputId,
    "select_language",
    htmltools::htmlDependency(
      name = "select_language-input",
      version = "1.0.0",
      src = c(file = "www/language.selector/main_bundle"),
      package = "language.selector",
      script = "bundle.js",
      all_files = TRUE
    ),
    default = default_language,
    list(
      languages = languages,
      icons_path = icons_path,
      main_icon_path = main_icon_path
    ),
    htmltools::tags$span
  )
}

#' Update Select Lanugage
#'
#' Update Select Lanugage
#'
#' @export
updateSelect_languageInput <- function(session, inputId, value, configuration = NULL) {
  message <- list(value = value)
  if (!is.null(configuration)) message$configuration <- configuration
  session$sendInputMessage(inputId, message);
}
