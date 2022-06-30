# postcss-global-important-plugin

a postcss plugin that turns elements under :global in css-module into important

``` diff
.container {
  font-size: 14px;
  :global .ant-btn {
-    font-weight: 500;
+    font-weight: 500 !important;
    &:hover, &:focus, &:visited {
-      color: red;
+      color: red !important;
    }
  }
}
```