class path {
    stroke: boolean;	//true	Whether to draw stroke along the path. Set it to false to disable borders on polygons or circles.
    color: string;	//'#3388ff'	Stroke color
    weight: number;	//3	Stroke width in pixels
    opacity: number;	//1.0	Stroke opacity
    lineCap: string;	//'round'	A string that defines shape to be used at the end of the stroke.
    lineJoin: string;	//'round'	A string that defines shape to be used at the corners of the stroke.
    dashArray: string;	//null	A string that defines the stroke dash pattern. Doesn't work on Canvas-powered layers in some old browsers.
    dashOffset: string;	//null	A string that defines the distance into the dash pattern to start the dash. Doesn't work on Canvas-powered layers in some old browsers.
    fill: boolean;//depends	Whether to fill the path with color. Set it to false to disable filling on polygons or circles.
    fillColor: string;	//*	Fill color. Defaults to the value of the color option
    fillOpacity: number;	//0.2	Fill opacity.
    fillRule: string;	//'evenodd'	A string that defines how the inside of a shape is determined.
    //TODO renderer: Renderer; 		Use this specific instance of Renderer for this path. Takes precedence over the map's default renderer.
    className: string;	//null	Custom class name set on an element. Only for SVG renderer.
}
