import { createElement, useRef, forwardRef, useImperativeHandle } from 'rax';
import { isWeex } from 'universal-env';
import Text from 'rax-text';
import cx from 'classnames/dedupe';
import './index.css'

const Link = (props, ref) => {
  const linkRef = useRef(null);
  let children = props.children;
  const { className } = props;
  let nativeProps = { ...props };
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

  useImperativeHandle(ref, () => ({
    _nativeNode: linkRef.current
  }));

  if (isWeex) {
    return <a className={cx('rax-link', className)} ref={linkRef} {...nativeProps}>{content}</a>;
  } else {
    return <a className={cx('rax-link', className)} ref={linkRef} {...nativeProps} style={style}>{content}</a>;
  }
};

export default forwardRef(Link);
