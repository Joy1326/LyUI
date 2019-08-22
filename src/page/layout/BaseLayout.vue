<template>
  <LyLayout fit>
    <LyLayoutPanel>
      <div style="background-color:rgb(228, 228, 228);height:1000px;width:1000px;">center</div>
    </LyLayoutPanel>
    <LyLayoutPanel slot="header">
      <div style="height:100px;background-color: rgb(45, 90, 111);color:white;">
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
      <div style="background-color: rgb(45, 90, 111);color:white;height:50px;">
        footer
      </div>
    </LyLayoutPanel>

  </LyLayout>
</template>
