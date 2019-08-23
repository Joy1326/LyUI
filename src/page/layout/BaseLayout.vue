<template>
  <LyLayout fit>
    <LyLayoutPanel>
      <div style="background: radial-gradient(#9E9E9E, transparent);height:1000px;width:1000px;">center</div>
    </LyLayoutPanel>
    <LyLayoutPanel slot="header">
      <div style="height:100px;background: radial-gradient(#f3f3f3, transparent);color:white;">
        header
      </div>
    </LyLayoutPanel>
    <LyLayoutPanel
      slot="left"
      style="width:200px;"
    >
      left
    </LyLayoutPanel>
    <LyLayoutPanel
      slot="right"
      style="width:100px;"
    >
      right
    </LyLayoutPanel>
    <LyLayoutPanel slot="footer">
      <div style="background: radial-gradient(#f3f3f3, transparent);color:white;height:50px;">
        footer
      </div>
    </LyLayoutPanel>

  </LyLayout>
</template>
