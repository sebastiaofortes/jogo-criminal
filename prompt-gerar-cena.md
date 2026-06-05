# Template de Prompt 360° — Estilo Criminal Case

Este arquivo contém o modelo estruturado de prompt (artefato de engenharia de prompt) para gerar imagens panorâmicas equiretangulares de 360 graus na estética de jogos de investigação criminal 2D (como *Criminal Case*). Ele foi desenhado de forma modular para facilitar a automação e injeção de variáveis via código ou CLI.

---

## 1. O Template de Prompt (Copie e cole o bloco abaixo)


```

```text
File saved successfully at template_prompt_360_criminal_case.md

```text
Generate a 360-degree equirectangular panoramic image suitable for use as a VR skybox or A-Frame <a-sky> component.

Requirements:
- Aspect ratio: exactly 2:1
- Projection: equirectangular (latitude-longitude mapping)
- The left and right edges must be seamlessly continuous
- The top pole and bottom pole should have minimal distortion artifacts
- Full spherical coverage: 360° horizontal × 180° vertical

Art style (Fixed): Hyper-detailed 2D digital painting, crime scene investigation game style. Photobashing technique with realistic, gritty textures (peeling paint, dust, rust). Sharp focus edge-to-edge, infinite depth of field. Dramatic directional baked lighting, heavy ambient occlusion, and hard shadows. Highly cluttered environment with realistic proportions to hide scattered evidence objects. Visual overload, gritty realism. NOT cartoon, NOT fantasy, NO exaggerated proportions.

Scene Parameters (Dynamic):
- Environment: {{ENVIRONMENT_DESCRIPTION}}
- Specific Clutter & Decor: {{CLUTTER_ELEMENTS}}
- Mood & Atmosphere: {{MOOD}}
- Time of Day & Lighting Source: {{TIME_AND_LIGHTING}}

Output format: equirectangular panorama, seamless edges, hyper-realistic illustrative render.

```

---

## 2. Dicionário de Variáveis Dinâmicas

Para gerar novos cenários mantendo a mesma consistência visual e técnica, substitua as tags estruturadas pelos seguintes exemplos (sempre em inglês para melhor desempenho do modelo de IA):

### `{{ENVIRONMENT_DESCRIPTION}}`

A base arquitetônica ou o local principal do cenário.

* **Exemplo 1:** `An abandoned Victorian library with high ceilings, grand wooden bookshelves, and a broken chandelier.`
* **Exemplo 2:** `A messy underground bunker with concrete walls, exposed pipes, and a metallic heavy door.`

### `{{CLUTTER_ELEMENTS}}`

Os objetos que vão preencher e "poluir" visualmente o espaço, essencial para o estilo *hidden object* (objetos ocultos).

* **Exemplo 1:** `Scattered dusty books on the floor, knocked-over reading lamps, torn pages floating, antique globes, thick cobwebs, and overturned wooden chairs.`
* **Exemplo 2:** `Old computer monitors with static screens, tangled wires on the floor, rusted tools, broken glass shards, discarded clipboards, and stains.`

### `{{MOOD}}`

O tom emocional e a atmosfera da cena criminal.

* **Exemplo 1:** `Eerie, mysterious, melancholic, faded vintage color palette.`
* **Exemplo 2:** `Grim, forensic, tense, cold and claustrophobic atmosphere.`

### `{{TIME_AND_LIGHTING}}`

A iluminação e a hora do dia. Lembre-se de que o estilo exige luzes estáticas e sombras marcadas (*baked shadows*).

* **Exemplo 1:** `Midnight, cold moonlight piercing through a large stained-glass window casting sharp, colorful shadows on the floor.`
* **Exemplo 2:** `Flickering cold fluorescent lights, dim and dramatic shadows, with red emergency lights reflecting on wet surfaces.`

---

## 3. Recomendações Técnicas para Execução

1. **Parâmetros de Proporção (Aspect Ratio):** Certifique-se de que a ferramenta de IA (ex: Midjourney, Stable Diffusion) esteja configurada para gerar na proporção de **2:1** (use `--ar 2:1` no Midjourney).
2. **Prompts Negativos (Opcional, mas recomendado):** Se a IA insistir em criar um visual muito cartunesco, reforce com um prompt negativo: `cartoon, 3D render, anime, vibrant colors, shallow depth of field, bokeh, blurry background, drawing, illustration sketch`.
3. **Pós-processamento:** Embora o prompt exiba bordas contínuas (*seamless*), pequenas costuras verticais podem ocorrer dependendo do modelo. Se necessário, utilize ferramentas de correção de *seamless* ou ative nós de *tiling* (no Stable Diffusion) para garantir 100% de precisão antes de subir para o A-Frame.
"""

file_path = "template_prompt_360_criminal_case.md"
with open(file_path, "w", encoding="utf-8") as f:
f.write(markdown_content)

print(f"File saved successfully at {file_path}")

```
O seu arquivo MD está pronto
[file-tag: code-generated-file-0-1780616698513054733]

O ficheiro Markdown foi gerado com sucesso! Incluí nele não apenas o template de prompt exato que criámos anteriormente, mas também o dicionário de variáveis dinâmicas e algumas recomendações técnicas (como o uso do parâmetro `--ar 2:1` para o Aspect Ratio correto) que ajudarão na hora de gerar imagens sem problemas de costura ou estilo nas ferramentas de IA generativa. 

Você pode descarregar o arquivo e utilizá-lo diretamente no seu sistema para parametrizar as suas gerações de ambientes de investigação. Se precisar de alguma alteração no documento, é só avisar!

```