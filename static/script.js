// static/script.js

document.addEventListener('DOMContentLoaded', () => {
    let coins = 0;
    let passiveRewardRate = 0;
    let totalRewards = 0;
    let clickRewardValue = 1;
    let trainingCentersBought = 0;
    let armorForgesBought = 0;
    let hardShellsBought = 0;
    let hammerHousesBought = 0;
    let researchCentersBought = 0;
    let enchantedLibrariesBought = 0;
    let diamondFurnacesBought = 0;

    const coinsDisplay = document.getElementById('coins');
    const clickRewardDisplay = document.getElementById('click-reward');
    const passiveRewardDisplay = document.getElementById('passive-reward');
    const totalRewardsDisplay = document.getElementById('total-rewards');
    const trainingCentersDisplay = document.getElementById('training-centers');
    const armorForgesDisplay = document.getElementById('armor-forges');
    const hardShellsDisplay = document.getElementById('hard-shells');
    const hammerHousesDisplay = document.getElementById('hammer-houses');
    const researchCentersDisplay = document.getElementById('research-centers');
    const enchantedLibrariesDisplay = document.getElementById('enchanted-libraries');
    const diamondFurnacesDisplay = document.getElementById('diamond-furnaces');
    const trainingCostDisplay = document.getElementById('training-cost');
    const armorCostDisplay = document.getElementById('armor-cost');
    const hardShellCostDisplay = document.getElementById('hard-shell-cost');
    const hammerCostDisplay = document.getElementById('hammer-cost');
    const researchCostDisplay = document.getElementById('research-cost');
    const libraryCostDisplay = document.getElementById('library-cost');
    const furnaceCostDisplay = document.getElementById('furnace-cost');
    const clickableButton = document.getElementById('clickable');
    const buyTrainingCenterButton = document.getElementById('buy-training-center');
    const buyArmorForgeButton = document.getElementById('buy-armor-forge');
    const buyHardShellButton = document.getElementById('buy-hard-shell-house');
    const buyHammerButton = document.getElementById('buy-hammer-house');
    const buyResearchCenterButton = document.getElementById('buy-research-center');
    const buyLibraryButton = document.getElementById('buy-enchanted-library');
    const buyFurnaceButton = document.getElementById('buy-diamond-furnace');

    // Atualizar a exibição das moedas
    function updateCoinsDisplay() {
        coinsDisplay.textContent = coins;
    }

    // Atualizar a exibição do ganho por clique
    function updateClickRewardDisplay() {
        clickRewardDisplay.textContent = clickRewardValue;
    }

    // Atualizar a exibição da recompensa passiva
    function updatePassiveRewardDisplay() {
        passiveRewardDisplay.textContent = passiveRewardRate;
    }

    // Atualizar a exibição do total de recompensas acumuladas
    function updateTotalRewardsDisplay() {
        totalRewardsDisplay.textContent = totalRewards;
    }

    // Atualizar a exibição dos centros de treinamento comprados
    function updateTrainingCentersDisplay() {
        trainingCentersDisplay.textContent = trainingCentersBought;
    }

    // Atualizar a exibição das forjas de armadura compradas
    function updateArmorForgesDisplay() {
        armorForgesDisplay.textContent = armorForgesBought;
    }

    // Atualizar a exibição das casas do casco duro compradas
    function updateHardShellsDisplay() {
        hardShellsDisplay.textContent = hardShellsBought;
    }

    // Atualizar a exibição das casas do martelo compradas
    function updateHammerHousesDisplay() {
        hammerHousesDisplay.textContent = hammerHousesBought;
    }

    //Função para criar e animar o texto flutuante
    function createFloatingText(value, x, y) {
        const floatText = document.createElement('span');
        floatText.classList.add('float-text');
        floatText.textContent = `+${value}`;
        
        // Posiciona o texto na posição do clique
        floatText.style.left = `${x}px`;
        floatText.style.top = `${y}px`;

        document.body.appendChild(floatText);

        // Remove o elemento após a animação
        floatText.addEventListener('animationend', () => {
            floatText.remove();
        });
    }

    // Evento de clique no botão clicável
    clickableButton.addEventListener('click', (event) => {
        coins += clickRewardValue;
        totalRewards += clickRewardValue;
        updateCoinsDisplay();
        updateTotalRewardsDisplay();

        // Pega a posição do clique
        const rect = clickableButton.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        // Cria o texto flutuante no clique
        createFloatingText(clickRewardValue, event.pageX, event.pageY);
    });

    // Evento de clique no botão de compra do centro de treinamento
    buyTrainingCenterButton.addEventListener('click', () => {
        const trainingCost = parseInt(trainingCostDisplay.textContent, 10);
        if (coins >= trainingCost) {
            coins -= trainingCost;
            passiveRewardRate++;
            trainingCentersBought++;
            updateCoinsDisplay();
            updatePassiveRewardDisplay();
            updateTrainingCentersDisplay();
            trainingCostDisplay.textContent = trainingCost * 2; // Aumenta o custo para a próxima compra
        } else {
            alert('Você não tem moedas suficientes para comprar o Centro de Treinamento!');
        }
    });

    // Evento de clique no botão de compra da forja de armadura
    buyArmorForgeButton.addEventListener('click', () => {
        const armorCost = parseInt(armorCostDisplay.textContent, 10);
        if (coins >= armorCost) {
            coins -= armorCost;
            armorForgesBought++;
            clickRewardValue++;
            updateCoinsDisplay();
            updateArmorForgesDisplay();
            updateClickRewardDisplay(); // Atualiza o display do ganho por clique
            armorCostDisplay.textContent = armorCost * 3; // Triplica o custo para a próxima compra
        } else {
            alert('Você não tem moedas suficientes para comprar a Forja de Armadura!');
        }
    });

    // Evento de clique no botão de compra da casa do casco duro
    buyHardShellButton.addEventListener('click', () => {
        const hardShellCost = parseInt(hardShellCostDisplay.textContent, 10);
        if (coins >= hardShellCost) {
            coins -= hardShellCost;
            passiveRewardRate += 3;
            hardShellsBought++;
            updateCoinsDisplay();
            updateHardShellsDisplay();
            updatePassiveRewardDisplay(); // Atualiza o display da recompensa passiva
            hardShellCostDisplay.textContent = hardShellCost * 2; // Multiplica o custo por 2 para a próxima compra
        } else {
            alert('Você não tem moedas suficientes para comprar a Casa do Casco Duro!');
        }
    });

    // Evento de clique no botão de compra da casa do martelo
    buyHammerButton.addEventListener('click', () => {
        const hammerCost = parseInt(hammerCostDisplay.textContent, 10);
        if (coins >= hammerCost) {
            coins -= hammerCost;
            clickRewardValue += 3;
            hammerHousesBought++;
            updateCoinsDisplay();
            updateHammerHousesDisplay();
            updateClickRewardDisplay(); // Atualiza o display do ganho por clique
            hammerCostDisplay.textContent = hammerCost * 3; // Multiplica o custo por 3 para a próxima compra
        } else {
            alert('Você não tem moedas suficientes para comprar a Casa Do Martelo!');
        }
    });

    // Função para adicionar recompensa passiva
    function addPassiveReward() {
        coins += passiveRewardRate;
        totalRewards += passiveRewardRate;
        updateCoinsDisplay();
        updateTotalRewardsDisplay();
    }

    // Adicionar recompensa passiva a cada segundo
    setInterval(addPassiveReward, 1000);
    // Função para atualizar a exibição dos centros de pesquisa comprados
    function updateResearchCentersDisplay() {
        researchCentersDisplay.textContent = researchCentersBought;
    }

    // Função para atualizar a exibição das bibliotecas encantadas compradas
    function updateEnchantedLibrariesDisplay() {
        enchantedLibrariesDisplay.textContent = enchantedLibrariesBought;
    }

    // Função para atualizar a exibição dos fornos de diamante comprados
    function updateDiamondFurnacesDisplay() {
        diamondFurnacesDisplay.textContent = diamondFurnacesBought;
    }

    // Função para reduzir os custos dos upgrades
    function applyResearchCenterEffect() {
        const reductionFactor = 0.9;
        trainingCostDisplay.textContent = Math.floor(parseInt(trainingCostDisplay.textContent, 10) * reductionFactor);
        armorCostDisplay.textContent = Math.floor(parseInt(armorCostDisplay.textContent, 10) * reductionFactor);
        hardShellCostDisplay.textContent = Math.floor(parseInt(hardShellCostDisplay.textContent, 10) * reductionFactor);
        hammerCostDisplay.textContent = Math.floor(parseInt(hammerCostDisplay.textContent, 10) * reductionFactor);
        libraryCostDisplay.textContent = Math.floor(parseInt(libraryCostDisplay.textContent, 10) * reductionFactor);
        furnaceCostDisplay.textContent = Math.floor(parseInt(furnaceCostDisplay.textContent, 10) * reductionFactor);
    }

    // Função para aumentar a eficiência dos upgrades
    function applyLibraryEffect() {
        const efficiencyFactor = 1.15;
        clickRewardValue = Math.floor(clickRewardValue * efficiencyFactor);
        passiveRewardRate = Math.floor(passiveRewardRate * efficiencyFactor);
    }

    // Evento de clique no botão de compra do Centro de Pesquisa
    buyResearchCenterButton.addEventListener('click', () => {
        const researchCost = parseInt(researchCostDisplay.textContent, 10);
        if (coins >= researchCost) {
            coins -= researchCost;
            researchCentersBought++;
            updateCoinsDisplay();
            updateResearchCentersDisplay();
            applyResearchCenterEffect(); // Aplica o efeito de redução de custo
            researchCostDisplay.textContent = researchCost * 2; // Aumenta o custo para a próxima compra
        } else {
            alert('Você não tem moedas suficientes para comprar o Centro de Pesquisa!');
        }
    });

    // Evento de clique no botão de compra da Biblioteca Encantada
    buyLibraryButton.addEventListener('click', () => {
        const libraryCost = parseInt(libraryCostDisplay.textContent, 10);
        if (coins >= libraryCost) {
            coins -= libraryCost;
            enchantedLibrariesBought++;
            updateCoinsDisplay();
            updateEnchantedLibrariesDisplay();
            applyLibraryEffect(); // Aplica o efeito de aumento de eficiência
            libraryCostDisplay.textContent = libraryCost * 2; // Aumenta o custo para a próxima compra
        } else {
            alert('Você não tem moedas suficientes para comprar a Biblioteca Encantada!');
        }
    });

    // Evento de clique no botão de compra do Forno de Diamante
    buyFurnaceButton.addEventListener('click', () => {
        const furnaceCost = parseInt(furnaceCostDisplay.textContent, 10);
        if (coins >= furnaceCost) {
            coins -= furnaceCost;
            diamondFurnacesBought++;
            clickRewardValue += 10;
            passiveRewardRate += 10;
            updateCoinsDisplay();
            updateDiamondFurnacesDisplay();
            updateClickRewardDisplay();
            updatePassiveRewardDisplay();
            furnaceCostDisplay.textContent = furnaceCost * 2; // Aumenta o custo para a próxima compra
        } else {
            alert('Você não tem moedas suficientes para comprar o Forno de Diamante!');
        }
    });
    // Inicializa o display do ganho por clique e das casas compradas
    updateClickRewardDisplay();
    updateHardShellsDisplay();
    updateHammerHousesDisplay();
    updateResearchCentersDisplay();
    updateEnchantedLibrariesDisplay();
    updateDiamondFurnacesDisplay();
});


// Função para criar e animar o texto flutuante ao lado das moedas
    function createFloatingTextNearCoins(value) {
        const floatText = document.createElement('span');
        floatText.classList.add('float-text-near-coins');
        floatText.textContent = `+${value}`;

        // Posiciona o texto ao lado do contador de moedas
        const rect = coinsDisplay.getBoundingClientRect();
        floatText.style.left = `${rect.right + 10}px`; // 10px à direita do contador de moedas
        floatText.style.top = `${rect.top}px`;

        document.body.appendChild(floatText);

        // Remove o elemento após a animação
        floatText.addEventListener('animationend', () => {
            floatText.remove();
        });
    }
