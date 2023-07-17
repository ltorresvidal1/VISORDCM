(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[984],{65948:(e,n,t)=>{"use strict";t.r(n),t.d(n,{createReferencedImageDisplaySet:()=>ee,default:()=>ae,hydrateStructuredReport:()=>J.Z,srProtocol:()=>_});var o=t(32735);const a=JSON.parse('{"u2":"@ohif/extension-cornerstone-dicom-sr"}').u2,r="dicom-sr",s=`${a}.sopClassHandlerModule.${r}`;var i=t(62771),c=t(88256),d=t(57270),l=t(77331),u=t(94709);const S={POINT:"POINT",MULTIPOINT:"MULTIPOINT",POLYLINE:"POLYLINE",CIRCLE:"CIRCLE",ELLIPSE:"ELLIPSE"};class g extends d.AnnotationTool{constructor(){super(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments.length>1&&void 0!==arguments[1]?arguments[1]:{configuration:{}}),this.isPointNearTool=()=>null,this.getHandleNearImagePoint=()=>null,this.renderAnnotation=(e,n)=>{const{viewport:t}=e,{element:o}=t;let a=d.annotation.state.getAnnotations(this.getToolName(),o);if(!a?.length)return;if(a=this.filterInteractableAnnotationsForElement(o,a),!a?.length)return;const r=(0,u.yR)(o),{activeIndex:s,trackingUniqueIdentifiers:i}=r,c=i[s],l=a.filter((e=>i.includes(e.data?.cachedStats?.TrackingUniqueIdentifier)));if(!t._actors?.size)return;const g={toolGroupId:this.toolGroupId,toolName:this.getToolName(),viewportId:e.viewport.id};for(let e=0;e<l.length;e++){const o=l[e],a=o.annotationUID,{renderableData:r}=o.data.cachedStats,{cachedStats:s}=o.data,{referencedImageId:i}=o.metadata;g.annotationUID=a;const u=this.getStyle("lineWidth",g,o),f=this.getStyle("lineDash",g,o),m={color:s.TrackingUniqueIdentifier===c?"rgb(0, 255, 0)":this.getStyle("color",g,o),lineDash:f,lineWidth:u};Object.keys(r).forEach((e=>{const s=r[e];let c,l;switch(e){case S.POINT:c=this.renderPoint;break;case S.MULTIPOINT:c=this.renderMultipoint;break;case S.POLYLINE:c=this.renderPolyLine;break;case S.CIRCLE:c=this.renderEllipse;break;case S.ELLIPSE:c=this.renderEllipse,l=d.utilities.math.ellipse.getCanvasEllipseCorners;break;default:throw new Error(`Unsupported GraphicType: ${e}`)}const u=c(n,t,s,a,i,m);this.renderTextBox(n,t,u,l,o,g,m)}))}}}_getTextBoxLinesFromLabels(e){const n=Math.min(e.length,3),t=[];for(let o=0;o<n;o++){const n=e[o];t.push(`${m(n.label)}${n.value}`)}return t}renderPolyLine(e,n,t,o,a,r){const s={color:r.color,width:r.lineWidth};let i=[];return t.map(((t,a)=>{const r=t.map((e=>n.worldToCanvas(e))),c=`${a}`;2===r.length?d.drawing.drawLine(e,o,c,r[0],r[1],s):d.drawing.drawPolyline(e,o,c,r,s),i=i.concat(r)})),i}renderMultipoint(e,n,t,o,a,r){let s;t.map(((t,a)=>{s=t.map((e=>n.worldToCanvas(e)));d.drawing.drawHandles(e,o,"0",s,{color:r.color})}))}renderPoint(e,n,t,o,a,r){const s=[];return t.map(((t,i)=>{const c=t[0];s.push(n.worldToCanvas(c));const u=l.metaData.get("imagePixelModule",a);let S=10,g=10;if(u){const{columns:e,rows:n}=u;S=e/10,g=n/10}const f=l.utilities.worldToImageCoords(a,c),m=l.utilities.imageToWorldCoords(a,[f[0]+S,f[1]+g]);s.push(n.worldToCanvas(m));const I=`${i}`;d.drawing.drawArrow(e,o,I,s[1],s[0],{color:r.color,width:r.lineWidth})})),s}renderEllipse(e,n,t,o,a,r){let s;return t.map(((t,a)=>{if(0===t.length)return;const i=t,c=n.getRotation();let l;s=i.map((e=>n.worldToCanvas(e))),l=90==c||270==c?d.utilities.math.ellipse.getCanvasEllipseCorners([s[2],s[3],s[0],s[1]]):d.utilities.math.ellipse.getCanvasEllipseCorners(s);const u=`${a}`;d.drawing.drawEllipse(e,o,u,l[0],l[1],{color:r.color,width:r.lineWidth})})),s}renderTextBox(e,n,t,o,a,r){let s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};if(!t||!a)return;const{annotationUID:i,data:c={}}=a,{label:l}=c,{color:u}=s;let S=t;"function"==typeof o&&(S=o(t));const g=this._getTextBoxLinesFromLabels(l),f=d.utilities.drawing.getTextBoxCoordsCanvas(S);a.data.handles.textBox.worldPosition=n.canvasToWorld(f);const m=n.worldToCanvas(a.data.handles.textBox.worldPosition),I=this.getLinkedTextBoxStyle(r,a),p=d.drawing.drawLinkedTextBox(e,i,"1",g,m,t,{},{...I,color:u}),{x:h,y:R,width:C,height:T}=p;a.data.handles.textBox.worldBoundingBox={topLeft:n.canvasToWorld([h,R]),topRight:n.canvasToWorld([h+C,R]),bottomLeft:n.canvasToWorld([h,R+T]),bottomRight:n.canvasToWorld([h+C,R+T])}}}g.toolName="DICOMSRDisplay";const f={"Short Axis":"W: ","Long Axis":"L: ",AREA:"Area: ",Length:"",CORNERSTONEFREETEXT:""};function m(e){const n=f[e];return void 0!==n?n:e}const I={DICOMSRDisplay:g.toolName,SRLength:"SRLength",SRBidirectional:"SRBidirectional",SREllipticalROI:"SREllipticalROI",SRCircleROI:"SRCircleROI",SRArrowAnnotate:"SRArrowAnnotate",SRAngle:"SRAngle",SRCobbAngle:"SRCobbAngle",SRRectangleROI:"SRRectangleROI",SRPlanarFreehandROI:"SRPlanarFreehandROI"},p=1e-4;function h(e,n,t){const o=I.DICOMSRDisplay,a={TrackingUniqueIdentifier:e.TrackingUniqueIdentifier,renderableData:{},labels:e.labels,imageId:n};e.coords.forEach((t=>{const{GraphicType:o,GraphicData:r}=t;void 0===a.renderableData[o]&&(a.renderableData[o]=[]),a.renderableData[o].push(function(e,n,t,o){const[a,r]=o.split(":");let s;switch(e){case S.POINT:case S.MULTIPOINT:case S.POLYLINE:s=[];for(let e=0;e<n.length;e+=2){const o=l.utilities.imageToWorldCoords(t,[n[e],n[e+1]]);s.push(o)}break;case S.CIRCLE:{const e=[];for(let o=0;o<n.length;o+=2){const a=l.utilities.imageToWorldCoords(t,[n[o],n[o+1]]);e.push(a)}const o=e[0],a=e[1],r=c.R3.distance(o,a),i=l.metaData.get("imagePlaneModule",t);if(!i)throw new Error("No imagePlaneModule found");const{columnCosines:d,rowCosines:u}=i,S=c.R3.create();c.R3.scaleAndAdd(S,o,d,r);const g=c.R3.create();c.R3.scaleAndAdd(g,o,d,-r);const f=c.R3.create();c.R3.scaleAndAdd(f,o,u,r);const m=c.R3.create();c.R3.scaleAndAdd(m,o,u,-r),s=[S,g,f,m];break}case S.ELLIPSE:{const e=[];for(let o=0;o<n.length;o+=2){const a=l.utilities.imageToWorldCoords(t,[n[o],n[o+1]]);e.push(a)}const o=c.R3.fromValues(...e[0]),a=c.R3.fromValues(...e[1]),r=c.R3.fromValues(...e[2]),i=c.R3.fromValues(...e[3]),d=c.R3.create();c.R3.sub(d,a,o),c.R3.normalize(d,d);const u=c.R3.create();c.R3.sub(u,i,r),c.R3.normalize(u,u);const S=l.metaData.get("imagePlaneModule",t);if(!S)throw new Error("imageId does not have imagePlaneModule metadata");const{columnCosines:g}=S,f=c.R3.fromValues(...g),m=Math.abs(c.R3.dot(f,d)),I=Math.abs(c.R3.dot(f,u)),h=Math.abs(m),R=Math.abs(I);s=[],Math.abs(h-1)<p?s=[e[0],e[1],e[2],e[3]]:Math.abs(R-1)<p?s=[e[2],e[3],e[0],e[1]]:console.warn("OBLIQUE ELLIPSE NOT YET SUPPORTED");break}default:console.warn("Unsupported GraphicType:",e)}return s}(o,r,n,e.TrackingIdentifier))}));const r=l.metaData.get("imagePlaneModule",n),s=d.annotation.state.getAnnotationManager(),i=e.coords[0].ReferencedSOPSequence&&e.coords[0].ReferencedSOPSequence[0]?.ReferencedFrameNumber||1,u={annotationUID:e.TrackingUniqueIdentifier,metadata:{FrameOfReferenceUID:r.frameOfReferenceUID,toolName:o,referencedImageId:n},data:{label:e.labels,handles:{textBox:{}},cachedStats:{TrackingUniqueIdentifier:a.TrackingUniqueIdentifier,renderableData:a.renderableData},frameNumber:i}};s.addAnnotation(u),e.loaded=!0,e.imageId=n,e.displaySetInstanceUID=t,e.ReferencedSOPInstanceUID=e.coords[0].ReferencedSOPSequence.ReferencedSOPInstanceUID,e.frameNumber=i,delete e.coords}var R=t(4606);const C=R.adaptersSR.Cornerstone3D.MeasurementReport.CORNERSTONE_TOOL_CLASSES_BY_UTILITY_TYPE,T=["cornerstoneTools@^4.0.0"],O=C.CORNERSTONE_3D_TAG;const{CodeScheme:D}=R.adaptersSR.Cornerstone3D,{ImageSet:E,MetadataProvider:y}=i.classes,b=["1.2.840.10008.5.1.4.1.1.88.11","1.2.840.10008.5.1.4.1.1.88.22","1.2.840.10008.5.1.4.1.1.88.33","1.2.840.10008.5.1.4.1.1.88.34"],N="Cornerstone3DTools",U="0.1",w=(e,n)=>{n.forEach((n=>{if(n.StudyInstanceUID!==e)throw console.warn("Not all instances have the same UID",e,n),new Error(`Instances ${n.SOPInstanceUID} does not belong to ${e}`)}))},M={ImagingMeasurementReport:"126000",ImageLibrary:"111028",ImagingMeasurements:"126010",MeasurementGroup:"125007",ImageLibraryGroup:"126200",TrackingUniqueIdentifier:"112040",TrackingIdentifier:"112039",Finding:"121071",FindingSite:"G-C0E3",CornerstoneFreeText:D.codeValues.CORNERSTONEFREETEXT},v={SRT:"SRT",CornerstoneCodeSchemes:[D.CodingSchemeDesignator,"CST4"]},P={INFERRED_FROM:"INFERRED FROM",CONTAINS:"CONTAINS"},q="CORNERSTONEFREETEXT";function L(e,n){return this.instances.push(...e),i.utils.sortStudyInstances(this.instances),this.instance=this.instances[this.instances.length-1],this.isLoaded=!1,this}function A(e,n,t){if(!e||!e.length)throw new Error("No instances were provided");i.utils.sortStudyInstances(e);const o=e[e.length-1],{StudyInstanceUID:a,SeriesInstanceUID:r,SOPInstanceUID:c,SeriesDescription:d,SeriesNumber:l,SeriesDate:u,ConceptNameCodeSequence:S,SOPClassUID:g}=o;if(w(o.StudyInstanceUID,e),!S||S.CodeValue!==M.ImagingMeasurementReport)return n.services.uiNotificationService.show({title:"DICOM SR",message:"OHIF only supports TID1500 Imaging Measurement Report Structured Reports. The SR you’re trying to view is not supported.",type:"warning",duration:6e3}),[];const f={Modality:"SR",displaySetInstanceUID:i.utils.guid(),SeriesDescription:d,SeriesNumber:l,SeriesDate:u,SOPInstanceUID:c,SeriesInstanceUID:r,StudyInstanceUID:a,SOPClassHandlerId:s,SOPClassUID:g,instances:e,referencedImages:null,measurements:null,isDerivedDisplaySet:!0,isLoaded:!1,sopClassUids:b,instance:o,addInstances:L};return f.load=()=>function(e,n,t){const{displaySetService:o,measurementService:a}=n.services,r=t.getDataSources(),s=r[0],{ContentSequence:i}=e.instance;e.referencedImages=function(e){const n=B(e.find((e=>e.ConceptNameCodeSequence.CodeValue===M.ImageLibrary)).ContentSequence).find((e=>e.ConceptNameCodeSequence.CodeValue===M.ImageLibraryGroup)),t=[];return B(n.ContentSequence).forEach((e=>{const{ReferencedSOPSequence:n}=e;if(n)for(const e of B(n))if(e.ReferencedSOPClassUID){const{ReferencedSOPClassUID:n,ReferencedSOPInstanceUID:o}=e;t.push({ReferencedSOPClassUID:n,ReferencedSOPInstanceUID:o})}})),t}(i),e.measurements=function(e){const n=e.find((e=>e.ConceptNameCodeSequence.CodeValue===M.ImagingMeasurements)),t=function(e){const n={};return e.forEach((e=>{const t=B(e.ContentSequence),o=t.find((e=>e.ConceptNameCodeSequence.CodeValue===M.TrackingUniqueIdentifier));o||console.warn("No Tracking Unique Identifier, skipping ambiguous measurement.");const a=o.UID;void 0===n[a]?n[a]=[...t]:t.forEach((e=>{e.ConceptNameCodeSequence.CodeValue!==M.TrackingUniqueIdentifier&&n[a].push(e)}))})),n}(B(n.ContentSequence).filter((e=>e.ConceptNameCodeSequence.CodeValue===M.MeasurementGroup))),o=[];return Object.keys(t).forEach((e=>{const n=function(e){if(e.some((e=>"SCOORD"===e.ValueType||"SCOORD3D"===e.ValueType)))return function(e){const n=e.find((e=>"SCOORD"===e.ValueType)),t=e.find((e=>"UIDREF"===e.ValueType)),o=e.find((e=>e.ConceptNameCodeSequence.CodeValue===M.TrackingIdentifier));if(!n)return void console.warn(`graphic ValueType ${n.ValueType} not currently supported, skipping annotation.`);const a=e.filter((e=>"NUM"===e.ValueType)),r={loaded:!1,labels:[],coords:[F(n)],TrackingUniqueIdentifier:t.UID,TrackingIdentifier:o.TextValue};return a.forEach((e=>{const{ConceptNameCodeSequence:n,MeasuredValueSequence:t}=e;t&&r.labels.push(x(n,t))})),r}(e);return function(e){const n=e.filter((e=>"NUM"===e.ValueType)),t=e.find((e=>"UIDREF"===e.ValueType)),o=e.find((e=>e.ConceptNameCodeSequence.CodeValue===M.TrackingIdentifier)),a=e.find((e=>e.ConceptNameCodeSequence.CodeValue===M.Finding)),r=e.filter((e=>e.ConceptNameCodeSequence.CodingSchemeDesignator===v.SRT&&e.ConceptNameCodeSequence.CodeValue===M.FindingSite)),s={loaded:!1,labels:[],coords:[],TrackingUniqueIdentifier:t.UID,TrackingIdentifier:o.TextValue};a&&v.CornerstoneCodeSchemes.includes(a.ConceptCodeSequence.CodingSchemeDesignator)&&a.ConceptCodeSequence.CodeValue===M.CornerstoneFreeText&&s.labels.push({label:q,value:a.ConceptCodeSequence.CodeMeaning});if(r.length){const e=r.find((e=>v.CornerstoneCodeSchemes.includes(e.ConceptCodeSequence.CodingSchemeDesignator)&&e.ConceptCodeSequence.CodeValue===M.CornerstoneFreeText));e&&s.labels.push({label:q,value:e.ConceptCodeSequence.CodeMeaning})}return n.forEach((e=>{const{ConceptNameCodeSequence:n,ContentSequence:t,MeasuredValueSequence:o}=e,{ValueType:a}=t;if("SCOORD"===!a)return void console.warn(`Graphic ${a} not currently supported, skipping annotation.`);const r=F(t);r&&s.coords.push(r),o&&s.labels.push(x(n,o))})),s}(e)}(t[e]);n&&o.push(n)})),o}(i);const c=a.getSourceMappings(N,U);e.isHydrated=!1,e.isRehydratable=function(e,n){if(!n||!n.length)return!1;const t=n.map((e=>e.annotationType)),{measurements:o}=e,a=Object.keys(C).filter((e=>"function"==typeof C[e].isValidCornerstoneTrackingIdentifier)),r=[];a.forEach((e=>{t.includes(e)&&r.push(C[e])}));for(let e=0;e<o.length;e++){const{TrackingIdentifier:n}=o[e]||{};if(r.some((e=>{let[t,o]=n.split(":");T.includes(t)&&(t=O);const a=`${t}:${o}`;return e.isValidCornerstoneTrackingIdentifier(a)})))return!0;console.log("Measurement is not rehydratable",n,o[e])}return console.log("No measurements found which were rehydratable"),!1}(e,c),e.isLoaded=!0,o.activeDisplaySets.forEach((n=>{k(e,n,s)})),o.subscribe(o.EVENTS.DISPLAY_SETS_ADDED,(n=>{const{displaySetsAdded:t}=n;t.forEach((n=>{k(e,n,s)}))}))}(f,n,t),[f]}function k(e,n,t){let o=e.measurements.filter((e=>!1===e.loaded));if(0===o.length)return;if(!n instanceof E)return;const{sopClassUids:a,images:r}=n;if(o=o.filter((e=>e.coords.some((e=>a.includes(e.ReferencedSOPSequence.ReferencedSOPClassUID))))),0===o.length)return;const s=[];o.forEach((e=>{const{coords:n}=e;n.forEach((e=>{const n=e.ReferencedSOPSequence.ReferencedSOPInstanceUID;s.includes(n)||s.push(n)}))}));const i=t.getImageIdsForDisplaySet(n);for(const e of i){if(!o.length)return;const{SOPInstanceUID:t,frameNumber:a}=y.getUIDsFromImageID(e);if(s.includes(t))for(let r=o.length-1;r>=0;r--){const s=o[r];V(s,t,a)&&(h(s,e,n.displaySetInstanceUID),o.splice(r,1))}}}function V(e,n,t){const{coords:o}=e,a=e.coords[0].ReferencedSOPSequence&&e.coords[0].ReferencedSOPSequence[0]?.ReferencedFrameNumber||1;if(t&&Number(t)!==Number(a))return!1;for(let e=0;e<o.length;e++){const t=o[e],{ReferencedSOPInstanceUID:a}=t.ReferencedSOPSequence;if(a===n)return!0}}function F(e){const{ValueType:n,RelationshipType:t,GraphicType:o,GraphicData:a}=e;if(t!=P.INFERRED_FROM&&t!=P.CONTAINS)return void console.warn(`Relationshiptype === ${t}. Cannot deal with NON TID-1400 SCOORD group with RelationshipType !== "INFERRED FROM" or "CONTAINS"`);const r={ValueType:n,GraphicType:o,GraphicData:a};if("SCOORD"===n){const{ReferencedSOPSequence:n}=e.ContentSequence;r.ReferencedSOPSequence=n}else if("SCOORD3D"===n){const{ReferencedFrameOfReferenceSequence:n}=e.ContentSequence;r.ReferencedFrameOfReferenceSequence=n}return r}function x(e,n){const{CodeMeaning:t}=e,{NumericValue:o,MeasurementUnitsCodeSequence:a}=n,{CodeValue:r}=a;return{label:t,value:`${o?Number(o).toFixed(2):""} ${r}`}}function B(e){return e?Array.isArray(e)?e:[e]:[]}const $=function(e){let{servicesManager:n,extensionManager:t}=e;return[{name:r,sopClassUids:b,getDisplaySetsFromSeries:e=>A(e,n,t)}]},_={id:"@ohif/sr",hasUpdatedPriorsInformation:!1,name:"SR Key Images",protocolMatchingRules:[],toolGroupIds:["default"],numberOfPriorsReferenced:0,defaultViewport:{viewportOptions:{viewportType:"stack",toolGroupId:"default",allowUnmatchedView:!0},displaySets:[{id:"srDisplaySetId",matchedDisplaySetsIndex:-1}]},displaySetSelectors:{srDisplaySetId:{seriesMatchingRules:[{attribute:"Modality",constraint:{equals:"SR"}}]}},stages:[{name:"SR Key Images",viewportStructure:{layoutType:"grid",properties:{rows:1,columns:1}},viewports:[{viewportOptions:{allowUnmatchedView:!0},displaySets:[{id:"srDisplaySetId"}]}]}]};var G=t(22737);const{log:W}=i.default;const j=function(e,n){const t={};function o(o,a){if(!o.metadata?.referencedImageId)return void W.warn(`[DICOMSR] No referencedImageId found for ${a} ${o.id}`);const r=o.metadata.referencedImageId;t[r]||(t[r]={});const s=t[r];s[a]||(s[a]={data:[]});const i=e.find((e=>e.uid===o.annotationUID)),c=s[a].data;let{finding:d}=i;const l=[];i.label&&(n.includes(a)?d={CodeValue:"CORNERSTONEFREETEXT",CodingSchemeDesignator:"CORNERSTONEJS",CodeMeaning:i.label}:l.push({CodeValue:"CORNERSTONEFREETEXT",CodingSchemeDesignator:"CORNERSTONEJS",CodeMeaning:i.label})),i.findingSites&&l.push(...i.findingSites);const u=Object.assign({},o,{finding:d,findingSites:l});c.push(u)}const a=e.map((e=>e.uid)).slice(),r=d.annotation.state.getAnnotationManager(),s=r.getFramesOfReference();for(let e=0;e<s.length;e++){const n=s[e],i=r.getAnnotations(n),c=Object.keys(i);for(let e=0;e<c.length;e++){const n=c[e],r=i[n];if(r)for(let e=0;e<r.length;e++){const s=r[e],i=a.findIndex((e=>e===s.annotationUID));if(-1!==i&&(o(s,n),a.splice(i,1),!a.length))return t}}}return t},{MeasurementReport:H}=R.adaptersSR.Cornerstone3D,{log:Y}=i.default,z=e=>{let{}=e;const n={downloadReport:e=>{let{measurementData:t,additionalFindingTypes:o,options:a={}}=e;const r=n.generateReport(t,o,a),s=G.default.data.datasetToBlob(r);var i=URL.createObjectURL(s);window.location.assign(i)},storeMeasurements:async e=>{let{measurementData:n,dataSource:t,additionalFindingTypes:o,options:a={}}=e;if(Y.info("[DICOMSR] storeMeasurements"),!t||!t.store||!t.store.dicom)return Y.error("[DICOMSR] datasource has no dataSource.store.dicom endpoint!"),Promise.reject({});try{const e=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const o=j(e,n),a=H.generateReport(o,l.metaData,l.utilities.worldToImageCoords,t),{dataset:r}=a;return void 0===r.SpecificCharacterSet&&(r.SpecificCharacterSet="ISO_IR 192"),r}(n,o,a),{StudyInstanceUID:r,ContentSequence:s}=e;if(!s?.[4].ContentSequence?.length)throw console.log("naturalizedReport missing imaging content",e),new Error("Invalid report, no content");return await t.store.dicom(e),r&&t.deleteStudyMetadataPromise(r),i.DicomMetadataStore.addInstances([e],!0),e}catch(e){throw console.warn(e),Y.error(`[DICOMSR] Error while saving the measurements: ${e.message}`),new Error(e.message||"Error while saving the measurements.")}}},t={downloadReport:{commandFn:n.downloadReport,storeContexts:[],options:{}},storeMeasurements:{commandFn:n.storeMeasurements,storeContexts:[],options:{}}};return{actions:n,definitions:t,defaultContext:"CORNERSTONE_STRUCTURED_REPORT"}};function X(e,n,t){class o extends n{}o.toolName=e,(0,d.addTool)(o)}var J=t(68525);const K=i.classes.ImageSet,Z=(e,n)=>{const{displaySetInstanceUID:t,ReferencedSOPInstanceUID:o}=e,a=n.getDisplaySetByUID(t);if(a.images)return a.images.find((e=>e.SOPInstanceUID===o))},Q=(e,n)=>{const t=[],o={};for(const a of n.measurements){const{imageId:n}=a;if(!n)continue;if(o[n])continue;const r=Z(a,e);r?(o[n]=r,t.push(r)):console.log("Measurement",a,"had no instances found")}return t},ee=(e,n)=>{const t=Q(e,n),o=new K(t),a=t[0];return o.setAttributes({displaySetInstanceUID:o.uid,SeriesDate:a.SeriesDate,SeriesTime:a.SeriesTime,SeriesInstanceUID:o.uid,StudyInstanceUID:a.StudyInstanceUID,SeriesNumber:a.SeriesNumber||0,SOPClassUID:a.SOPClassUID,SeriesDescription:`${n.SeriesDescription} KO ${n.instance.SeriesNumber}`,Modality:"KO",isMultiFrame:!1,numImageFrames:t.length,SOPClassHandlerId:"@ohif/extension-default.sopClassHandlerModule.stack",isReconstructable:!1,isCompositeStack:!0,madeInClient:!0,excludeFromThumbnailBrowser:!0,updateInstances:function(){this.images.splice(0,this.images.length,...Q(e,n)),this.numImageFrames=this.images.length}}),e.addDisplaySets(o),o};function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ne.apply(this,arguments)}const te=o.lazy((()=>t.e(953).then(t.bind(t,27953)))),oe=e=>o.createElement(o.Suspense,{fallback:o.createElement("div",null,"Loading...")},o.createElement(te,e)),ae={id:a,onModeEnter:function(e){let{servicesManager:n}=e;const{displaySetService:t}=n.services;[...t.getDisplaySetCache().values()].filter((e=>e.SOPClassHandlerId===s)).forEach((e=>{e.isHydrated=!1}))},preRegistration:function(e){let{configuration:n={}}=e;(0,d.addTool)(g),X(I.SRLength,d.LengthTool),X(I.SRBidirectional,d.BidirectionalTool),X(I.SREllipticalROI,d.EllipticalROITool),X(I.SRCircleROI,d.CircleROITool),X(I.SRArrowAnnotate,d.ArrowAnnotateTool),X(I.SRAngle,d.AngleTool),X(I.SRCobbAngle,d.CobbAngleTool),X(I.SRPlanarFreehandROI,d.PlanarFreehandROITool);const t={lineDash:"4,4"};d.annotation.config.style.setToolGroupToolStyles("SRToolGroup",{SRLength:t,SRBidirectional:t,SREllipticalROI:t,SRCircleROI:t,SRArrowAnnotate:t,SRCobbAngle:t,SRAngle:t,SRPlanarFreehandROI:t,global:{}})},getViewportModule(e){let{servicesManager:n,extensionManager:t}=e;return[{name:"dicom-sr",component:e=>o.createElement(oe,ne({servicesManager:n,extensionManager:t},e))}]},getCommandsModule:z,getSopClassHandlerModule:$,getUtilityModule(e){let{servicesManager:n}=e;return[{name:"tools",exports:{toolNames:I}}]}}},94709:(e,n,t)=>{"use strict";t.d(n,{l2:()=>r,yR:()=>s});var o=t(77331);const a={TrackingUniqueIdentifier:null,trackingIdentifiersByViewportId:{}};function r(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const r=(0,o.getEnabledElement)(e),{viewport:s}=r;a.trackingIdentifiersByViewportId[s.id]={trackingUniqueIdentifiers:n,activeIndex:t}}function s(e){const n=(0,o.getEnabledElement)(e),{viewport:t}=n;return a.trackingIdentifiersByViewportId[t.id]?a.trackingIdentifiersByViewportId[t.id]:{trackingUniqueIdentifiers:[]}}},68525:(e,n,t)=>{"use strict";t.d(n,{Z:()=>f});var o=t(77331),a=t(62771);var r=t(4606);const{guid:s}=a.default.utils,{MeasurementReport:i,CORNERSTONE_3D_TAG:c}=r.adaptersSR.Cornerstone3D,d="Cornerstone3DTools",l="0.1",u=["cornerstoneTools@^4.0.0"],S=(e,n)=>{if(!n||"CORNERSTONEJS"===n.CodingSchemeDesignator)return;const t=`${n.CodingSchemeDesignator}:${n.CodeValue}`;return{...e[t],ref:t,...n,text:n.CodeMeaning}},g=(e,n)=>{if(!n||!n.length)return;const t=[];for(let o=0;o<n.length;o++){const a=S(e,n[o][0]||n[o]);a&&t.push(a)}return t.length&&t||void 0};function f(e,n){let{servicesManager:t,extensionManager:r}=e;const f=r.getActiveDataSource()[0],{measurementService:p,displaySetService:h,customizationService:R}=t.services,C=R.getCustomization("codingValues",{}),T=h.getDisplaySetByUID(n),O=p.getSourceMappings(d,l);if(!O||!O.length)throw new Error("Attempting to hydrate measurements service when no mappings present. This shouldn't be reached.");const D=a.DicomMetadataStore.getInstance(T.StudyInstanceUID,T.SeriesInstanceUID,T.SOPInstanceUID),E={},y={};T.measurements.forEach((e=>{const{ReferencedSOPInstanceUID:n,imageId:t,frameNumber:o}=e;E[n]||(E[n]=t,y[n]=[]),y[n][o]||(y[n][o]=t)}));const b=function(e){const n="Imaging Measurements",t="Measurement Group",o="Tracking Identifier",a=m(e.ContentSequence).find(I(n)),r=m(a.ContentSequence).filter(I(t)),s={},d=i.CORNERSTONE_TOOL_CLASSES_BY_UTILITY_TYPE,l=[];return Object.keys(d).forEach((e=>{l.push(d[e]),s[e]=[]})),r.forEach(((e,n)=>{const t=m(e.ContentSequence).find((e=>e.ConceptNameCodeSequence.CodeMeaning===o)),a=t.TextValue;let[r,s]=a.split(":");u.includes(r)&&(r=c);const i=`${r}:${s}`;t.TextValue=i})),e}(D),N=i.generateToolState(b,E,o.utilities.imageToWorldCoords,o.metaData),U=O.map((e=>e.annotationType)),w={};Object.keys(N).forEach((e=>{U.includes(e)&&(w[e]=N[e])}));const M=[];let v;Object.keys(w).forEach((e=>{w[e].forEach((e=>{const n=e.annotation.data&&e.annotation.data.frameNumber||1,t=y[e.sopInstanceUid][n]||E[e.sopInstanceUid];M.includes(t)||M.push(t)}))}));const P=[];for(let e=0;e<M.length;e++){const n=M[e],{SeriesInstanceUID:t,StudyInstanceUID:a}=o.metaData.get("instance",n);P.includes(t)||P.push(t),v?v!==a&&console.warn("NO SUPPORT FOR SRs THAT HAVE MEASUREMENTS FROM MULTIPLE STUDIES."):v=a}return Object.keys(w).forEach((e=>{w[e].forEach((n=>{const t=n.annotation.data&&n.annotation.data.frameNumber||1,a=y[n.sopInstanceUid][t]||E[n.sopInstanceUid];n.uid=s();const r=o.metaData.get("instance",a),{FrameOfReferenceUID:i}=r,c={annotationUID:n.annotation.annotationUID,data:n.annotation.data,metadata:{toolName:e,referencedImageId:a,FrameOfReferenceUID:i}},u=p.getSource(d,l);c.data.label=function(e){const{findingSites:n=[],finding:t}=e;let o=n.find((e=>"CORNERSTONEFREETEXT"===e.CodeValue));return o?o.CodeMeaning:t&&"CORNERSTONEFREETEXT"===t.CodeValue?t.CodeMeaning:void 0}(n),c.data.finding=S(C,n.finding?.[0]),c.data.findingSites=g(C,n.findingSites),c.data.site=c.data.findingSites?.[0];const m=O.find((n=>n.annotationType===e));p.addRawMeasurement(u,e,{annotation:c},m.toMeasurementSchema,f),M.includes(a)||M.push(a)}))})),T.isHydrated=!0,{StudyInstanceUID:v,SeriesInstanceUIDs:P}}const m=function(e){return Array.isArray(e)?e:[e]},I=e=>n=>n.ConceptNameCodeSequence.CodeMeaning===e},78753:()=>{}}]);
//# sourceMappingURL=984.bundle.8625da42979747034f1a.js.map