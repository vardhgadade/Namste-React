WHat is usememo hook=> it is the hook which cache the  calculation between the renders or we can say if any heavy operation is there in a component and it is again rerandiring coz of any other component state changing so at that time we should use the usememo hook (in usememo you cache the value not the function)


What is useCallback hook=> useCallback is react hook that lets you cache a function defination between rerenders(here you cache the function whole not the value )

WHat is useRefHook=> useRef is a react hook that lets you reference a value thats not needed for rendering
useRef returns you the object with the current value of the variable
