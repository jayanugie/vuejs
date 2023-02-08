<template>
  <div class="keranjang">
    <Navbar :updateKeranjang="keranjangs" />
    <div class="container">
      <!-- Breadcrumb -->
      <div class="row mt-5">
        <div class="col">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link to="/" class="text-dark">Home</router-link>
              </li>
              <li class="breadcrumb-item">
                <router-link to="/foods" class="text-dark">Foods</router-link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Keranjang
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <h2>Keranjang, <strong>Saya</strong></h2>
          <div class="table-responsive mt-3">
            <table class="table mt-4">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Foto</th>
                  <th scope="col">Makanan</th>
                  <th scope="col">Keterangan</th>
                  <th scope="col">Jumlah</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Total Harga</th>
                  <th scope="col">Hapus</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(keranjang, idx) in keranjangs" :key="keranjang.id">
                  <th scope="row">{{ idx + 1 }}</th>
                  <td>
                    <img
                      :src="'/assets/images/' + keranjang.products.gambar"
                      alt="foto makanan"
                      class="img-fluid shadow"
                      width="250px"
                    />
                  </td>
                  <th>{{ keranjang.products.nama }}</th>
                  <td>
                    {{ keranjang.keterangan ? keranjang.keterangan : "-" }}
                  </td>
                  <td class="text-center">{{ keranjang.jumlah_pemesanan }}</td>
                  <td class="text-center">Rp{{ keranjang.products.harga }}</td>
                  <th class="text-center">
                    Rp{{
                      keranjang.products.harga * keranjang.jumlah_pemesanan
                    }}
                  </th>
                  <td class="text-center text-danger">
                    <b-icon-trash
                      class="hapus"
                      @click="hapusKeranjang(keranjang.id)"
                    ></b-icon-trash>
                  </td>
                </tr>
                <tr>
                  <td colspan="6" align="right">
                    <strong>Total Harga:</strong>
                  </td>
                  <th class="text-center">Rp{{ totalHarga }}</th>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <!-- form checkout -->
      <div class="row justify-content-end">
        <div class="col-md-4">
          <form class="mt-4" v-on:submit.prevent>
            <div class="form-group">
              <label for="nama">Nama:</label>
              <input type="text" class="form-control" v-model="pesan.nama" />
            </div>
            <div class="form-group">
              <label for="noMeja">Nomor Meja:</label>
              <input
                type="number"
                class="form-control"
                v-model="pesan.noMeja"
              />
            </div>
            <button
              type="submit"
              class="btn btn-success float-right"
              @click="checkout"
            >
              <b-icon-cart></b-icon-cart> Checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import axios from "axios";

export default {
  name: "KeranjangView",
  components: {
    Navbar,
  },
  data() {
    return {
      keranjangs: [],
      pesan: {},
    };
  },
  methods: {
    setKeranjangs(data) {
      this.keranjangs = data;
    },
    hapusKeranjang(id) {
      axios
        .delete("http://localhost:3000/keranjangs/" + id)
        .then(() => {
          this.$toast.success("Sukses Hapus Keranjang.", {
            type: "error",
            position: "top-right",
            duration: 3000,
            dismissible: true,
          });
          // update halaman setelah dihapus
          axios
            .get("http://localhost:3000/keranjangs")
            .then((res) => this.setKeranjangs(res.data))
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    },
    checkout() {
      if (
        this.pesan.nama &&
        this.pesan.noMeja &&
        this.keranjangs.length !== 0
      ) {
        this.pesan.keranjang = this.keranjangs;
        axios
          .post("http://localhost:3000/pesanans", this.pesan)
          .then(() => {
            // Hapus semua keranjang
            this.keranjangs.map((item) => {
              return axios
                .delete("http://localhost:3000/keranjangs/" + item.id)
                .catch((err) => console.log(err));
            });

            this.$router.push({ path: "/pesanan-sukses" });
            this.$toast.success("Sukses dipesan.", {
              type: "success",
              position: "top-right",
              duration: 3000,
              dismissible: true,
            });
          })
          .catch((err) => console.log(err));
      } else {
        this.$toast.success("Keranjang / nama / nomor meja masih kosong.", {
          type: "error",
          position: "top-right",
          duration: 3000,
          dismissible: true,
        });
      }
    },
  },
  mounted() {
    axios
      .get("http://localhost:3000/keranjangs")
      .then((res) => this.setKeranjangs(res.data))
      .catch((err) => console.log(err));
  },
  computed: {
    totalHarga() {
      return this.keranjangs.reduce((item, data) => {
        return item + data.products.harga * data.jumlah_pemesanan;
      }, 0);
    },
  },
};
</script>

<style></style>
