const styleToString = (style) => {
  return Object.entries(style).map(([k, v]) => `${k}: ${v}`).join(';');
}

export default styleToString
