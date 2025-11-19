import { withFocusTracker } from "@/hoc/withFocusTracker";
import Input from "./Input";

export const InputWithFocusTracker = withFocusTracker(Input);

InputWithFocusTracker.displayName = "InputWithFocusTracker";
