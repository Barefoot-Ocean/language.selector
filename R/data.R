#' Available Languages Configuration
#'
#' A list containing language configurations with flag icons for the language selector.
#' Each language entry includes a display name, language code, and icon filename.
#'
#' @format A list with language entries, each containing:
#' \describe{
#'   \item{name}{Full language name (e.g., "English", "French")}
#'   \item{lang}{Language code abbreviation (e.g., "en", "fr")}
#'   \item{icon}{Filename of the flag icon (e.g., "england.png")}
#' }
#'
#' @examples
#' # View available languages
#' language.selector::languages
#'
#' # Use in select_languageInput
#' \dontrun{
#' select_languageInput(
#'   inputId = "lang",
#'   default_language = "en",
#'   languages = language.selector::languages
#' )
#' }
#'
#' @name languages
"languages"

#' Built-in Language Flag Icons
#'
#' A data frame containing language codes and names for the embedded language flag icons.
#' Use these codes with \code{iconClass = "language-flag language-flag-"} in select inputs.
#'
#' @format A data frame with 10 rows and 3 columns:
#' \describe{
#'   \item{code}{Language code (lowercase) - use as CSS class suffix}
#'   \item{name}{Language name}
#'   \item{icon}{Icon filename}
#' }
#'
#' @examples
#' # View available language flags
#' language.selector::language_flags
#'
#' @export
language_flags <- data.frame(
  code = c("en", "ceb", "es", "fil", "fr", "id", "mg", "pt", "sw", "tet"),
  name = c("English", "Cebuano", "Spanish", "Filipino", "French",
           "Indonesian", "Malagasy", "Portuguese", "Swahili", "Tetum"),
  icon = c("england.png", "philippines.png", "spain.png", "philippines.png",
           "france.png", "indonesia.png", "madagascar.png", "portugal.png",
           "tanzania.png", "easttimor.png"),
  stringsAsFactors = FALSE
)
