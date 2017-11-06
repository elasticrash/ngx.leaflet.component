export class path {
    constructor(pathInfo) {
        this.stroke = true;
        this.color = '#3388ff';
        this.weight = 3;
        this.opacity = 1;
        this.lineCap = 'round';
        this.lineJoin = 'round';
        this.dashArray = null;
        this.dashOffset = null;
        this.fill = true;
        this.fillColor = '#3388ff';
        this.fillOpacity = 0.2;
        this.fillRule = 'evenodd';
        this.className = null;
        if (pathInfo !== null) {
            for (var key in pathInfo) {
                if (pathInfo[key] !== undefined) {
                    this[key] = pathInfo[key];
                }
            }
        }
    }
}
//# sourceMappingURL=path.js.map