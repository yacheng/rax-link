import {
  createElement,
  useRef,
  forwardRef,
  useImperativeHandle,
  ForwardRefExoticComponent
} from 'rax';
import Text from 'rax-text';
import omit from 'omit.js';
import { LinkProps } from './types';

const Link: ForwardRefExoticComponent<LinkProps> = forwardRef((props, ref) => {
  const linkRef = useRef<HTMLLinkElement>(null);
  const { style = {}, children } = props;
  const nativeProps = { ...props };
  const textStyle = {
    color: style.color,
    lines: style.lines,
    fontSize: style.fontSize,
    fontStyle: style.fontStyle,
    fontWeight: style.fontWeight,
    textDecoration: style.textDecoration || 'none',
    textAlign: style.textAlign,
    fontFamily: style.fontFamily,
    textOverflow: style.textOverflow
  };

  useImperativeHandle(ref, () => linkRef.current);

  if (nativeProps.onPress) {
    nativeProps.onClick = nativeProps.onPress;
  }

  return (
    <a
      ref={linkRef}
      style={style}
      {...omit(nativeProps, ['style', 'onPress', 'children'])}
    >
      {typeof children === 'string' ? (
        <Text style={textStyle}>{children}</Text>
      ) :
        children
      }
    </a>
  );
});

export default Link;
