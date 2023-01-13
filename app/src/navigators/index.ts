export { default as AppNavigator } from './AppNavigator'
import { createNavigationContainerRef } from "@react-navigation/native";
export const navigationRef = createNavigationContainerRef()
export const changePage = (newPage: never, args: object | never = {}) => navigationRef.current?.navigate(newPage, args as never);
export const goBack = () => navigationRef.current?.goBack();