<template>
  <form class="box">
    <div class="wrapper">
      <p class="title">Download a GPW monthly raport</p>
      <label class="label"> Month:</label>
      <select name="month" id="month" v-model="month" class="select">
        <option disabled value="">Please select month:</option>
        <option value="12">12</option>
        <option value="11">11</option>
        <option value="10">10</option>
        <option value="09">09</option>
        <option value="08">08</option>
        <option value="07">07</option>
        <option value="06">06</option>
        <option value="05">05</option>
        <option value="04">04</option>
        <option value="03">03</option>
        <option value="02">02</option>
        <option value="01">01</option>
      </select>
      <label class="label">Year:</label>
      <select name="year" id="year" v-model="year" class="select">
        <option disabled value="">Please select year:</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
        <option value="2017">2017</option>
        <option value="2016">2016</option>
        <option value="2015">2015</option>
        <option value="2014">2014</option>
        <option value="2013">2013</option>
        <option value="2012">2012</option>
        <option value="2011">2011</option>
        <option value="2010">2010</option>
        <option value="2009">2009</option>
        <option value="2008">2008</option>
        <option value="2007">2007</option>
        <option value="2006">2006</option>
        <option value="2005">2005</option>
        <option value="2004">2004</option>
        <option value="2003">2003</option>
        <option value="2002">2002</option>
      </select>
    </div>
    <a
      v-if="year <= 2013 || year === null"
      :href="
        'https://www.gpw.pl/pub/GPW/statystyki/statystyki_miesieczne/' +
        year +
        month +
        '_GPW.pdf'
      "
      class="button is-info submit"
      target="_blank"
    >
      Download
    </a>
    <a
      v-else
      :href="
        'https://www.gpw.pl/pub/GPW/statystyki/statystyki_miesieczne/' +
        year +
        month +
        '_GPW.xls'
      "
      class="button is-info submit"
    >
      Download
    </a>
  </form>
  <div class="idk"></div>
</template>

<script>
export default {
  data() {
    return {
      year: "",
      month: "",
    };
  },
};
</script>

<style scoped>
.submit {
  margin-top: 20px;
}
.box {
  margin: 3% 25%;
}
.idk {
  height: 220px;
}
</style>