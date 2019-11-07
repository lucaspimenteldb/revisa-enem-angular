
import {Component, OnInit} from '@angular/core';

// ANIMAÇÃO DOS CÍRCULOS NA VISUALIZAÇÃO DOS DADOS
let count = 0;
function aumNumero(element, num, incremento, interval) {
  element.innerText = 0;

  const aumento = setInterval(() => {
    (element.innerText >= num) ? clearInterval(aumento) : element.innerText = parseInt(element.innerText) + incremento;
  }, interval);
  count = 1;
}

// @ts-ignore
$( document ).on('scroll', () => {
  const circulosProgresso = document.querySelector('.circulo-linha');

  function entrouViewport() {
    const rect = circulosProgresso.getBoundingClientRect();
    const html = document.documentElement;
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) &&
      rect.right <= (window.innerWidth || html.clientWidth)
    );
  }

  if (entrouViewport()) {
    const circulos = document.querySelectorAll('.circulo-linha');
    setTimeout(() => {
      // @ts-ignore
      for (let circulo of circulos) {
        circulo.classList.add('animacao-circ-progresso');
      }
    }, 300);
  }

  // ANIMAÇÃO DOS NÚMEROS NA VISUALIZAÇÃO DOS DADOS
  const numSimulados = document.getElementById('simulados');
  const numQuestoes = document.getElementById('questoes');
  const numEscolas = document.getElementById('escolas');

  if (count === 0) {
    aumNumero(numSimulados, 2500, 20, 12);
    aumNumero(numEscolas, 700, 4, 10);
    aumNumero(numQuestoes, 500000, 1000, 1);
  }
});

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  ngOnInit(): void {
    const circuloPadding = document.getElementsByClassName('circulo') as HTMLCollectionOf<HTMLElement>;
    circuloPadding[2].style.margin = 'auto 20px auto';
  }

}
