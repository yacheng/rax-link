import { createElement } from 'rax';
import {isWeex} from 'universal-env';
import Text from 'rax-text';

export default (props) => {
  let children = props.children;
  let nativeProps = {...props};
  let style = {
    ...nativeProps.style
  };
  let textStyle = {
    color: style.color,
    lines: style.lines,
    fontSize: style.fontSize,
    fontStyle: style.fontStyle,
    fontWeight: style.fontWeight,
    textDecoration: style.textDecoration || 'none',
    textAlign: style.textAlign,
    fontFamily: style.fontFamily,
    textOverflow: style.textOverflow,
  };

  if (nativeProps.onPress) {
    nativeProps.onClick = nativeProps.onPress;
    delete nativeProps.onPress;
  }

  let content = children;
  if (typeof children === 'string') {
    content = <Text style={textStyle}>{children}</Text>;
  }

  if (isWeex) {
    return <a {...nativeProps}>{content}</a>;
  } else {
    return <a {...nativeProps} style={style}>{content}</a>;
  }
};