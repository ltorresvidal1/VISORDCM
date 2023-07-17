"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[55,806],{76440:(e,t,r)=>{r.r(t),r.d(t,{default:()=>D});var i=r(32735),a=r(14664),n=r(60216),s=r.n(n),o=r(40001),c=r.n(o),l=r(73559),d=r(40841),p=r.n(d);const m=e=>{const{list:t,itemGenerator:r}=e;if(t)return t.map((t=>{if(!t)return;const i=t.generator||r;if(!i)throw new Error(`No generator for ${t}`);return i({...e,item:t})}))};r(53806),r(77331);const h=(e=>{let{topLeft:t=[],topRight:r=[],bottomLeft:a=[],bottomRight:n=[],itemGenerator:s=(()=>{})}=e;return e=>{const o="absolute pointer-events-none microscopy-viewport-overlay";return i.createElement(i.Fragment,null,t&&t.length>0&&i.createElement("div",{"data-cy":"viewport-overlay-top-left",className:p()(o,"top-viewport left-viewport text-primary-light")},m({...e,list:t,itemGenerator:s})),r&&r.length>0&&i.createElement("div",{"data-cy":"viewport-overlay-top-right",className:p()(o,"top-viewport right-viewport-scrollbar text-primary-light")},m({...e,list:r,itemGenerator:s})),n&&n.length>0&&i.createElement("div",{"data-cy":"viewport-overlay-bottom-right",className:p()(o,"bottom-viewport right-viewport-scrollbar text-primary-light")},m({...e,list:n,itemGenerator:s})),a&&a.length>0&&i.createElement("div",{"data-cy":"viewport-overlay-bottom-left",className:p()(o,"bottom-viewport left-viewport text-primary-light")},m({...e,list:a,itemGenerator:s})))}})({});var u=r(75935),v=r(62771);const{DICOMwebClient:y}=u.api;y._buildMultipartAcceptHeaderFieldValue=()=>"*/*";var w=r(22737),g=r(2932);function f(e){return!("object"==typeof e||Array.isArray(e))}const I=["DS","FL","FD","IS","OD","OF","OL","OV","SL","SS","SV","UL","US","UV"];function S(e,t){if(Array.isArray(e)){return e.map((e=>f(e)?e:S(e,t)))}return f(e)||Object.keys(e).forEach((r=>{null===e[r].Value&&e[r].vr?delete e[r].Value:Array.isArray(e[r].Value)&&e[r].vr&&(1===e[r].Value.length&&e[r].Value[0].BulkDataURI?(g.dicomWebUtils.fixBulkDataURI(e[r].Value[0],t,t.dataSourceConfig),e[r].BulkDataURI=e[r].Value[0].BulkDataURI,"https:"===window.location.protocol&&e[r].BulkDataURI.startsWith("http:")&&(e[r].BulkDataURI=e[r].BulkDataURI.replace("http:","https:")),delete e[r].Value):I.includes(e[r].vr)?e[r].Value=e[r].Value.map((e=>+e)):e[r].Value=e[r].Value.map((e=>S(e,t))))})),e}class b extends i.Component{constructor(e){super(e),this.state={error:null,isLoaded:!1},this.microscopyService=void 0,this.viewer=null,this.managedViewer=null,this.container=i.createRef(),this.overlayElement=i.createRef(),this.debouncedResize=void 0,this.setViewportActiveHandler=()=>{const{setViewportActive:e,viewportIndex:t,activeViewportIndex:r}=this.props;t!==r&&e(t)},this.onWindowResize=()=>{this.debouncedResize()};const{microscopyService:t}=this.props.servicesManager.services;this.microscopyService=t,this.debouncedResize=c()((()=>{this.viewer&&this.viewer.resize()}),100)}getNearbyROI(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=Object.getOwnPropertySymbols(this.viewer),i=r.find((e=>"drawingSource"===e.description)),a=r.find((e=>"pyramid"===e.description)),n=r.find((e=>"map"===e.description)),s=r.find((e=>"affine"===e.description)),o=this.viewer[i].getClosestFeatureToCoordinate(this.viewer[n].getEventCoordinate(e));if(!o)return null;const c=this.viewer._getROIFromFeature(o,this.viewer[a].metadata,this.viewer[s]);return c&&t&&this.microscopyService.selectAnnotation(c),c}async installOpenLayersRenderer(e,t){this.microscopyService.clearAnnotations();let i=t;"SR"===t.Modality&&(i=t.getSourceDisplaySet()),console.log("Loading viewer metadata",i),await(async i=>{const{viewer:a,metadata:n}=await r.e(18).then(r.t.bind(r,78457,23)),s=a.VolumeImageViewer,o=function(e){let{extensionManager:t,servicesManager:r}=e;const i=window.config.dataSources.find((e=>e.sourceName===t.activeDataSource)),{userAuthenticationService:a}=r.services,{wadoRoot:n,staticWado:s,singlepart:o}=i.configuration,c={url:n||"/dicomlocal",staticWado:s,singlepart:o,headers:a.getAuthorizationHeader(),errorInterceptor:v.Po.getHTTPErrorHandler()},l=new u.api.DICOMwebClient(c);return l.wadoURL=c.url,"dicomlocal"===t.activeDataSource&&(l.retrieveInstanceFrames=async e=>{if(!("studyInstanceUID"in e))throw new Error("Study Instance UID is required for retrieval of instance frames");if(!("seriesInstanceUID"in e))throw new Error("Series Instance UID is required for retrieval of instance frames");if(!("sopInstanceUID"in e))throw new Error("SOP Instance UID is required for retrieval of instance frames");if(!("frameNumbers"in e))throw new Error("frame numbers are required for retrieval of instance frames");console.log(`retrieve frames ${e.frameNumbers.toString()} of instance ${e.sopInstanceUID}`);const t=v.DicomMetadataStore.getInstance(e.studyInstanceUID,e.seriesInstanceUID,e.sopInstanceUID);return(Array.isArray(e.frameNumbers)?e.frameNumbers:e.frameNumbers.split(",")).map((e=>Array.isArray(t.PixelData)?t.PixelData[+e-1]:t.PixelData))}),l}({extensionManager:this.props.extensionManager,servicesManager:this.props.servicesManager}),c=[];i.forEach((e=>{e.ImageType="string"==typeof e.ImageType?e.ImageType.split("\\"):e.ImageType;const t=S(w.default.data.DicomMetaDictionary.denaturalizeDataset(e),{StudyInstanceUID:e.StudyInstanceUID,SeriesInstanceUID:e.SeriesInstanceUID,dataSourceConfig:this.props.dataSource.getConfig()});t["00480105"]||(t["00480105"]={vr:"SQ",Value:[{"00480106":{vr:"SH",Value:["1"]}}]});const r=new n.VLWholeSlideMicroscopyImage({metadata:t}),i=r.ImageType[2];"VOLUME"!==i&&"THUMBNAIL"!==i||c.push(r)}));const l={client:o,metadata:c,retrieveRendered:!1,controls:["overview","position"]};this.viewer=new s(l),this.overlayElement&&this.overlayElement.current&&this.viewer.addViewportOverlay&&this.viewer.addViewportOverlay({element:this.overlayElement.current,coordinates:[0,0],navigate:!0,className:"OpenLayersOverlay"}),this.viewer.render({container:e});const{StudyInstanceUID:d,SeriesInstanceUID:p}=t;this.managedViewer=this.microscopyService.addViewer(this.viewer,this.props.viewportIndex,e,d,p),this.managedViewer.addContextMenuCallback((e=>{}))})(i.others),"SR"===t.Modality&&t.load(i)}componentDidMount(){const{displaySets:e,viewportIndex:t}=this.props,r=e[t];this.installOpenLayersRenderer(this.container.current,r).then((()=>{this.setState({isLoaded:!0})}))}componentDidUpdate(e,t,r){if(this.managedViewer&&e.displaySets!==this.props.displaySets){const{displaySets:e}=this.props,t=e[0];if(this.microscopyService.clearAnnotations(),"SR"===t.Modality){const e=t.getSourceDisplaySet();t.load(e)}}}componentWillUnmount(){this.microscopyService.removeViewer(this.viewer)}render(){const e={width:"100%",height:"100%"},t=this.props.displaySets[0],r=t.firstInstance||t.instance;return i.createElement("div",{className:"DicomMicroscopyViewer",style:e,onClick:this.setViewportActiveHandler},i.createElement("div",{style:{...e,display:"none"}},i.createElement("div",{style:{...e},ref:this.overlayElement},i.createElement("div",{style:{position:"relative",height:"100%",width:"100%"}},t&&r.imageId&&i.createElement(h,{displaySet:t,instance:t.instance,metadata:t.metadata})))),a.ZP&&i.createElement(a.ZP,{handleWidth:!0,handleHeight:!0,onResize:this.onWindowResize}),this.state.error?i.createElement("h2",null,JSON.stringify(this.state.error)):i.createElement("div",{style:e,ref:this.container}),this.state.isLoaded?null:i.createElement(l.LE,{className:"w-full h-full bg-black"}))}}b.propTypes={viewportData:s().object,activeViewportIndex:s().number,setViewportActive:s().func,displaySets:s().array,viewportIndex:s().number,viewportLabel:s().string,dataSource:s().object,viewportOptions:s().object,displaySetOptions:s().array,servicesManager:s().object,extensionManager:s().object,commandsManager:s().object};const D=b}}]);
//# sourceMappingURL=55.bundle.5f79ec20d6f705aa702f.js.map