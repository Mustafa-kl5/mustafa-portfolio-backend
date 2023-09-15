function escapeAngleBrackets(input) {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
module.exports = { escapeAngleBrackets };
