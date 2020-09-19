import Reconciler from "react-reconciler";

const rootHostContext = {};
const childHostContext = {};

/**
 * reconciler 配置项
 */
const hostConfig: any = {
  // 获取 root 的 context
  getRootHostContext: () => {
    return rootHostContext;
  },
  prepareForCommit: () => {},
  resetAfterCommit: () => {},
  // 获取 子节点 context
  getChildHostContext: () => {
    return childHostContext;
  },
  // 是否应该创建文本节点
  shouldSetTextContent: (type: any, props: { children: any; }) => {
    return typeof props.children === 'string' || typeof props.children === 'number';
  },
  /**
   This is where react-reconciler wants to create an instance of UI element in terms of the target.
   Since our target here is the DOM, we will create document.createElement and type is the argument that contains the type string like div or img or h1 etc.
   The initial values of domElement attributes can be set in this function from the newProps argument
   其他的 render 在这里可以做映射
   */
  createInstance: (type: any, newProps: { [x: string]: any; }, rootContainerInstance: any, _currentHostContext: any, workInProgress: any) => {
    // web 端使用 dom api 来创建节点
    const domElement = document.createElement(type);
    Object.keys(newProps).forEach(propName => {
      const propValue = newProps[propName];
      if (propName === 'children') {
        if (typeof propValue === 'string' || typeof propValue === 'number') {
          domElement.textContent = propValue;
        }
      } else if (propName === 'onClick') {
        domElement.addEventListener('click', propValue);
      } else if (propName === 'className') {
        domElement.setAttribute('class', propValue);
      } else if (propName === 'ml-color') {
        // 自定义属性 mlColor
        domElement.style.backgroundColor = newProps['ml-color'];
      } else {
        const propValue = newProps[propName];
        domElement.setAttribute(propName, propValue);
      }
    });
    return domElement;
  },
  createTextInstance: (text: string) => {
    return document.createTextNode(text);
  },
  appendInitialChild: (parent: { appendChild: (arg0: any) => void; }, child: any) => {
    parent.appendChild(child);
  },
  appendChild(parent: { appendChild: (arg0: any) => void; }, child: any) {
    parent.appendChild(child);
  },
  finalizeInitialChildren: (domElement: any, type: any, props: any) => {},
  supportsMutation: true,
  appendChildToContainer: (parent: { appendChild: (arg0: any) => void; }, child: any) => {
    parent.appendChild(child);
  },
  prepareUpdate(domElement: any, oldProps: any, newProps: any) {
    return true;
  },
  // 更新时属性如何变化
  commitUpdate(domElement: { textContent: string | number; setAttribute: (arg0: string, arg1: any) => void; }, updatePayload: any, type: any, oldProps: any, newProps: { [x: string]: any; }) {
    Object.keys(newProps).forEach(propName => {
      const propValue = newProps[propName];
      if (propName === 'children') {
        if (typeof propValue === 'string' || typeof propValue === 'number') {
          domElement.textContent = propValue;
        }
      } else {
        const propValue = newProps[propName];
        domElement.setAttribute(propName, propValue);
      }
    });
  },
  commitTextUpdate(textInstance: { text: any; }, oldText: any, newText: any) {
    textInstance.text = newText;
  },
  removeChild(parentInstance: { removeChild: (arg0: any) => void; }, child: any) {
    parentInstance.removeChild(child);
  }
};

const MyReconcilerInstance = Reconciler(hostConfig);
const MyCustomRenderer = {
    render(ele: any, container: any, callback?: any){
      // Create a root Container if it doesnt exist
      if (!container._rootContainer) {
        container._rootContainer = MyReconcilerInstance.createContainer(container, false, false);
      }
  
      // update the root Container
      return MyReconcilerInstance.updateContainer(ele, container._rootContainer, null, callback);
    }
};
export default MyCustomRenderer