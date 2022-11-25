import EventEmitter from "events";
import { router } from "../trpc";

const ee = new EventEmitter();
export const messageRouter = router({});
