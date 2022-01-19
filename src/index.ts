import { toast } from './core/toast';

// Type re-export workaround, to stay compatible with TS 3.7 and lower
export type {
  ToastOptions,
  ToastPosition,
  Toast,
  Renderable,
  ValueOrFunction,
  ToasterProps ,
  DefaultToastOptions,
  IconTheme,
  ToastType,
  ValueFunction,
} from './core/types';
export { useToaster } from './core/use-toaster';
export { useStore as useToasterStore } from './core/store';
export { resolveValue } from './core/types';

export { toast };
export default toast;
