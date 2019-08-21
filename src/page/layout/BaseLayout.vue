<template>
  <LyLayout fit>
    <LyLayoutPanel>
      <div style="background-color:#d6dad6;height:1000px;width:1000px;">center</div>
    </LyLayoutPanel>
    <LyLayoutPanel slot="header">
      <div style="height:100px;background-color: #f3feff;">
        header
      </div>
    </LyLayoutPanel>
    <LyLayoutPanel
      slot="left"
      width="100"
    >
      left
    </LyLayoutPanel>
    <LyLayoutPanel
      slot="right"
      width="80"
    >
      right
    </LyLayoutPanel>
    <LyLayoutPanel slot="footer">
      <div style="background-color:#8a8a8a;height:50px;">
        footer
      </div>
    </LyLayoutPanel>

  </LyLayout>
</template>
