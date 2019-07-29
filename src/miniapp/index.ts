import fmtEvent from './fmtEvent';

Component({
  data: {
  },
  props: {
    className: '',
    style: '',
    // minappHref取值：navigate:abc?a=1 redirect:abc?a=1 switchTab:a/b/c navigateBack:2
    minappHref: '',
    onPress: () => { },
    onAppear: () => { },
    onDisAppear: () => { }
  },
  didMount() {
  },
  methods: {
    onTap(e) {
      let minappHref = this.props.minappHref;
      if (minappHref) {
        let splits = minappHref.split(':');
        let key = splits[0];
        let value = splits[1];
        switch (key) {
          case 'navigate':
            my.navigateTo({ url: value });
            break;
          case 'redirect':
            my.redirectTo({ url: value });
            break;
          case 'switchTab':
            my.switchTab({ url: value });
            break;
          case 'navigateBack':
            my.navigateBack({ delta: value });
            break;
          default:
            my.navigateTo({ url: key });
        }
      }
      const event = fmtEvent(this.props, e);
      this.props.onPress(event);
    },
    onAppear(e) {
      const event = fmtEvent(this.props, e);
      this.props.onAppear(event);
    },
    onDisAppear(e) {
      const event = fmtEvent(this.props, e);
      this.props.onDisAppear(event);
    }
  }
});
