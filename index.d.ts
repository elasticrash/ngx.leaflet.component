import { LeafletElement } from './map/map';
import { LayerElement } from './layer/layer';
import { MarkerElement } from './marker/marker';
import { CircleElement } from './circle/circle';
import { LeafletGroup } from './group/group';
import { MapService } from './services/map.service';
import { GroupService } from './services/group.service';
export declare const CandTLeafletComponent: (typeof CircleElement | typeof LeafletGroup | typeof LeafletElement | typeof LayerElement | typeof MarkerElement)[];
export declare const CandTLeafletService: (typeof MapService | typeof GroupService)[];
