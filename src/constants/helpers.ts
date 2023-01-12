import { Dimensions } from "react-native"
import { uploadUrl } from "./config";
export const showUploadImageOrVideoFromApi = (image: string) => uploadUrl + image;
export const getWindowSizes = () => Dimensions.get('window');