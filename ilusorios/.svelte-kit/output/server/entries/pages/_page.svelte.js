import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function _page($$payload) {
  const drinkIcon = "/images/client-icon.svg";
  $$payload.out += `<section class="section-common"><div class="div-section py-5 gap-10 lg:items-center"><div class="flex flex-col gap-2 text-center"><p class="text-light-green text-3xl font-medium">Drinks</p> <p class="text-light-grey text-sm lg:text-lg">Escolha entre nossos muitos drinks e sinta o sabor que apenas o pub <span class="text-light-green">Ilusórios</span> pode proporcionar.</p></div> <div class="border border-light-green rounded-3xl flex flex-col p-5 gap-10 lg:w-1/2"><div class="flex flex-row gap-3"><img${attr("src", drinkIcon)} alt=""> <div class="flex flex-col gap-1"><p class="text-light-grey text-sm lg:text-base">Gin - R$??,??</p> <p class="text-modified-grey text-xs lg:text-sm">Um gin feito pelos melhores bartenders do país, apenas pra você.</p></div></div> <div class="flex flex-row gap-3"><img${attr("src", drinkIcon)} alt=""> <div class="flex flex-col gap-1"><p class="text-light-grey text-sm lg:text-base">Bebida - R$??,??</p> <p class="text-modified-grey text-xs lg:text-sm">Descrição da bebida</p></div></div> <div class="flex flex-row gap-3"><img${attr("src", drinkIcon)} alt=""> <div class="flex flex-col gap-1"><p class="text-light-grey text-sm lg:text-base">Bebida - R$??,??</p> <p class="text-modified-grey text-xs lg:text-sm">Descrição da bebida</p></div></div></div> <div class="flex flex-row lg:justify-center"><p class="text-light-grey text-sm lg:text-lg text-center">Já sabe o que pedir? Basta chamar o garçom e o seu pedido será entregue em alguns minutos.</p></div></div></section>`;
}
export {
  _page as default
};
