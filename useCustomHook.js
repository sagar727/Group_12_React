import { useState } from "react";

const useCustomHook = (initialValue) => {
	const [someValue, setSomeValue] = useState(initialValue);

	const someFunction = () => {};

	return { someValue, someFunction };
};

export default useCustomHook;
