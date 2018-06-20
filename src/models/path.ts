export class Path {
    // Whether to draw stroke along the path. Set it to false to disable borders on polygons or circles.
    public stroke: boolean = true;
    // Stroke color
    public color: string = '#3388ff';
    // Stroke width in pixels
    public weight: number = 3;
    // Stroke opacity
    public opacity: number = 1;
    // A string that defines shape to be used at the end of the stroke.
    public lineCap: string = 'round';
    // A string that defines shape to be used at the corners of the stroke.
    public lineJoin: string = 'round';
    // A string that defines the stroke dash pattern. Doesn't work on Canvas-powered layers in some old browsers.
    public dashArray: string = null;
    // A string that defines the distance into the dash pattern to start the dash.
    // Doesn't work on Canvas-powered layers in some old browsers.
    public dashOffset: string = null;
    // Whether to fill the path with color.Set it to false to disable filling on polygons or circles.
    public fill: boolean = true;
    // Fill color. Defaults to the value of the color option
    public fillColor: string = '#3388ff';
    // Fill opacity.
    public fillOpacity: number = 0.2;
    // A string that defines how the inside of a shape is determined.
    public fillRule: string = 'evenodd';
    // TODO renderer: Renderer;
    // Use this specific instance of Renderer for this path. Takes precedence over the map's default renderer.
    // null	Custom class name set on an element. Only for SVG renderer.
    public className: string = null;
    constructor(pathInfo: any) {
        const source: any = pathInfo;
        const copy: any = this;
        if (source !== null) {
            for (const key in source) {
                if (source[key] !== undefined) {
                    copy[key] = source[key];
                }
            }
        }
    }

}
