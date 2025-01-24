
export const touchDeviceState = $state({
	isTouchDevice: false,
	isInit: false
})

export const setIsTouchDevice = (value: boolean) => {
	touchDeviceState.isTouchDevice = value;
	touchDeviceState.isInit = true;
};