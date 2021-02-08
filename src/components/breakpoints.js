const size = {
 xs: "320px",
 xsm: "552px",
 sm: "768px",
 lg: "1200px",
 xl: "1900px",
}
const device = {
 xs: `(max-width: ${size.xs})`,
 xsm: `(max-width: ${size.xsm})`,
 sm: `(max-width: ${size.sm})`,
 lg: `(max-width: ${size.lg})`,
 xl: `(max-width: ${size.xl})`,
}
export default {size, device}