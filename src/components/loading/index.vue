<template>
    <div class="marsk">
        <van-loading type="spinner" color="#666" size="36" class="loading"/>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.marsk{
    width: 100%;
    height: 100%;
    background: transparent;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 999999;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>