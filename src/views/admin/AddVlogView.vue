<script setup>
    import Menu from '/src/components/partials/admin/Menu.vue'
    import Setting from '/src/components/partials/admin/Setting.vue'
</script>

<template>
    <div class="admin-container">
        <Menu />
        <div class="menu-dummy"></div>
        <div class="body">
            <Setting />
            <div id="new-vlog-container">
                <div class="body-header">
                    <h1>Thêm Vlog mới</h1>
                </div>
                <div id="new-vlog">
                    <div id="vlog-thumbnail">
                        <img src="/src/assets/images/11.png" alt="">
                    </div>
                    <div id="vlog-detail">
                        <form>
                            <div class="input-field">
                                <label for=""><h6>Tiêu đề</h6></label>
                                <input type="text" name="" id="">
                            </div>
                            <div class="input-field">
                                <label for=""><h6>Mô tả</h6></label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <div class="input-field">
                                <label for=""><h6>Thể loại</h6></label>
                                <div class="categories">
                                    <div class="category">
                                        <input type="checkbox" id="" name="" value="">
                                        <label for="">Thể loại 1</label>
                                    </div>
                                    <div class="category">
                                        <input type="checkbox" id="" name="" value="">
                                        <label for="">Thể loại 1</label>
                                    </div>
                                    <div class="category">
                                        <input type="checkbox" id="" name="" value="">
                                        <label for="">Thể loại 1</label>
                                    </div>
                                </div>
                            </div>
                            <div class="input-field input-field-row">
                                <h6>Hiện Vlog</h6>
                                <label class="switch">
                                    <input type="checkbox" checked>
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <button type="submit"><h6>Đăng Vlog</h6></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @import '/src/assets/variables';  

    #new-vlog-container {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        #new-vlog {
            display: flex;
            gap: 2rem;

            #vlog-thumbnail {
                width: 32rem;
                height: 20rem;

                img {
                    width: inherit;
                    height: inherit;
                    border-radius: 1rem;
                }
            }

            #vlog-detail {
                width: 100%;
                border-radius: 1rem;
                padding: 2rem;
                background-color: $boxColor;

                form {
                    display: flex;
                    flex-direction: column;
                    gap: 2.5rem;

                    .input-field {
                        display: flex;
                        flex-direction: column;
                        gap: 1rem;
                        color: $white;

                        .categories {
                            display: flex;
                            gap: 1.5rem;
                            flex-wrap: wrap;
                            
                            .category {
                                display: flex;
                                gap: .25rem;
                            }
                        }

                        input, textarea {
                            border: none;
                            padding: .75rem 1rem;
                            color: $white;
                            background-color: $secondaryButton;

                            &:focus {
                                outline: none;
                            }
                        }
                        
                        input {
                            border-radius: 1.5rem;
                        }

                        textarea {
                            border-radius: 1rem;
                        }
                    }

                    .input-field-row {
                        display: flex;
                        flex-direction: row;
                        align-items: center;
                    }

                    button {
                        cursor: pointer;
                        border-radius: 1.5rem;
                        padding: .5rem;
                        border: none;
                        color: $white;
                        background-color: $blue;
                    }
                }
            }
        }
    }

    .switch {
        position: relative;
        display: inline-block;
        width: 3rem;
        height: 1.75rem;
    }

    .switch input { 
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: $darkLabel;
        -webkit-transition: .4s;
        transition: .4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 4px;
        bottom: 4px;
        background-color: $white;
        -webkit-transition: .4s;
        transition: .4s;
    }

    input:checked + .slider {
        background-color: $blue;
    }

    input:focus + .slider {
        box-shadow: 0 0 1px $blue;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(1.25rem);
        -ms-transform: translateX(1.25rem);
        transform: translateX(1.25rem);
    }

    .slider.round {
        border-radius: 1.5rem;
    }

    .slider.round:before {
        border-radius: 50%;
    }
</style>