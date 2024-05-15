<template>
    <section class="bg-light">
        <div class="container">
            <div class="row">
                <div class="col-sm-4 mx-auto my-5">
                    <div class="card ">
                        <img src="/public/img/lock.png" class="l-h l-w mx-auto" alt="">
                        <h4 class="card-title text-center">User Login</h4>
                        <div class="card-body">
                            <div class="row">
                                <div class="group mb-3">
                                    <label for="" class="form-label">Email</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="group mb-3">
                                    <label for="" class="form-label">Password</label>
                                    <input type="text" class="form-control">
                                </div>
                                <div class="group mb-3">
                                    <button type="button" class="btn btn-success w-100">Login</button>
                                </div>
                                <div class="group mb-3">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label" for="flexCheckDefault">
                                        Remember Me
                                    </label>
                                    <a href="" class="float-end">Forgat Password</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<script>
export default {

}
</script>

<style>
.l-h {
    height: 100px;
}

.l-w {
    width: 200px;
}
</style>