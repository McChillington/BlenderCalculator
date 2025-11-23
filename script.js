const formulas = {
    'red extract': {
        materials: [
            { name: 'strawberry', amount: 50 },
            { name: 'royal jelly', amount: 10 }
        ],
        options: {
            'price for royal jellies': {
                a: 10,
                p: '{royal jelly price}',
                m: 'p * a',
                result: 'm'
            }
        }
    },
    'blue extract': {
        materials: [
            { name: 'blueberry', amount: 50 },
            { name: 'royal jelly', amount: 10 }
        ],
        options: {
            'price for royal jellies': {
                a: 10,
                p: '{royal jelly price}',
                m: 'p * a',
                result: 'm'
            }
        }
    },
    'enzyme': {
        materials: [
            { name: 'pineapple', amount: 50 },
            { name: 'royal jelly', amount: 10 }
        ],
        options: {
            'price for royal jellies': {
                a: 10,
                p: '{royal jelly price}',
                m: 'p * a',
                result: 'm'
            }
        }
    },
    'oil': {
        materials: [
            { name: 'sunflower seed', amount: 50 },
            { name: 'royal jelly', amount: 10 }
        ],
        options: {
            'price for royal jellies': {
                a: 10,
                p: '{royal jelly price}',
                m: 'p * a',
                result: 'm'
            }
        }
    },
    'gumdrop': {
        materials: [
            { name: 'blueberry', amount: 3 },
            { name: 'strawberry', amount: 3 },
            { name: 'pineapple', amount: 3 }
        ],
        options: {}
    },
    'glue': {
        materials: [
            { name: 'gumdrop', amount: 50, isItem: true },
            { name: 'royal jelly', amount: 10 }
        ],
        options: {
            'price for royal jellies': {
                a: 10,
                p: '{royal jelly price}',
                m: 'p * a',
                result: 'm'
            },
            'price for gumdrops': {
                a: '{amount}',
                p: '(gumdrop) * {amount}',
                result: 'p'
            }
        }
    },
    'tropical drink': {
        materials: [
            { name: 'coconut', amount: 10 },
            { name: 'enzyme', amount: 2, isItem: true },
            { name: 'oil', amount: 2, isItem: true }
        ],
        options: {
            'price for enzymes': {
                r: '[enzyme] * 2 * {amount}',
                result: 'r'
            },
            'price for oils': {
                r: '[oil] * 2 * {amount}',
                result: 'r'
            }
        }
    },
    'moon charm': {
        materials: [
            { name: 'pineapple', amount: 5 },
            { name: 'gumdrop', amount: 5, isItem: true },
            { name: 'royal jelly', amount: 1 }
        ],
        options: {
            'price for gumdrops': {
                r: '[gumdrop] * 5 * {amount}',
                result: 'r'
            }
        }
    },
    'glitter': {
        materials: [
            { name: 'moon charm', amount: 25, isItem: true },
            { name: 'magic bean', amount: 1 }
        ],
        options: {
            'price for moon charms': {
                p: '[moon charm] * 25 * {amount}',
                result: 'p'
            }
        }
    },
    'star jelly': {
        materials: [
            { name: 'royal jelly', amount: 100 },
            { name: 'glitter', amount: 3, isItem: true }
        ],
        options: {
            'price for glitter': {
                p: '[glitter] * 3 * {amount}',
                result: 'p'
            }
        }
    },
    'purple potion': {
        materials: [
            { name: 'neonberry', amount: 3 },
            { name: 'red extract', amount: 3, isItem: true },
            { name: 'blue extract', amount: 3, isItem: true },
            { name: 'glue', amount: 3, isItem: true }
        ],
        options: {
            'red extracts': {
                p: '[red extract] * 3 * {amount}',
                result: 'p'
            },
            'blue extracts': {
                p: '[blue extract] * 3 * {amount}',
                result: 'p'
            },
            'glue': {
                p: '[glue] * 3 * {amount}',
                result: 'p'
            }
        }
    },
    'soft wax': {
        materials: [
            { name: 'honeysuckle', amount: 5 },
            { name: 'oil', amount: 1, isItem: true },
            { name: 'enzyme', amount: 1, isItem: true },
            { name: 'royal jelly', amount: 10 }
        ],
        options: {
            'price for royal jellies': {
                a: 10,
                p: '{royal jelly price}',
                m: 'p * a',
                result: 'm'
            },
            'price for oils': {
                p: '[oil] * {amount}',
                result: 'p'
            },
            'price for enzymes': {
                p: '[enzyme] * {amount}',
                result: 'p'
            }
        }
    },
    'hard wax': {
        materials: [
            { name: 'soft wax', amount: 3, isItem: true },
            { name: 'enzyme', amount: 3, isItem: true },
            { name: 'bitterberry', amount: 33 },
            { name: 'royal jelly', amount: 33 }
        ],
        options: {
            'price for royal jellies': {
                a: 33,
                p: '{royal jelly price}',
                m: 'p * a',
                result: 'm'
            },
            'price for soft wax': {
                p: '[soft wax] * 3 * {amount}',
                result: 'p'
            },
            'price for enzymes': {
                p: '[enzyme] * 3 * {amount}',
                result: 'p'
            }
        }
    },
    'swirled wax': {
        materials: [
            { name: 'hard wax', amount: 3, isItem: true },
            { name: 'soft wax', amount: 9, isItem: true },
            { name: 'purple potion', amount: 6, isItem: true },
            { name: 'royal jelly', amount: 3333 }
        ],
        options: {
            'price for royal jellies': {
                a: 3333,
                p: '{royal jelly price}',
                m: 'p * a',
                result: 'm'
            },
            'price for soft waxes': {
                p: '[soft wax] * 9 * {amount}',
                result: 'p'
            },
            'price for hard waxes': {
                p: '[hard wax] * 3 * {amount}',
                result: 'p'
            },
            'price for purple potions': {
                p: '[purple potion] * 6 * {amount}',
                result: 'p'
            }
        }
    },
    'caustic wax': {
        materials: [
            { name: 'hard wax', amount: 5, isItem: true },
            { name: 'enzyme', amount: 5, isItem: true },
            { name: 'neonberry', amount: 25 },
            { name: 'royal jelly', amount: 5252 }
        ],
        options: {
            'price for hard waxes': {
                p: '[hard wax] * 5 * {amount}',
                result: 'p'
            },
            'price for enzymes': {
                p: '[enzyme] * 5 * {amount}',
                result: 'p'
            },
            'price for royal jellies': {
                a: 5252,
                p: '{royal jelly price}',
                m: 'p * a',
                result: 'm'
            }
        }
    },
    'field dice': {
        materials: [
            { name: 'soft wax', amount: 1, isItem: true },
            { name: 'whirligig', amount: 1 },
            { name: 'red extract', amount: 1, isItem: true },
            { name: 'blue extract', amount: 1, isItem: true }
        ],
        options: {
            'price for soft wax': {
                p: '[soft wax] * {amount}',
                result: 'p'
            },
            'price for red extract': {
                p: '[red extract] * {amount}',
                result: 'p'
            },
            'price for blue extract': {
                p: '[blue extract] * {amount}',
                result: 'p'
            }
        }
    },
    'smooth dice': {
        materials: [
            { name: 'field dice', amount: 3, isItem: true },
            { name: 'soft wax', amount: 3, isItem: true },
            { name: 'whirligig', amount: 3 },
            { name: 'oil', amount: 3, isItem: true }
        ],
        options: {
            'price for field dice': {
                p: '[field dice] * 3 * {amount}',
                result: 'p'
            },
            'price for soft waxes': {
                p: '[soft wax] * 3 * {amount}',
                result: 'p'
            },
            'price for oils': {
                p: '[oil] * 3 * {amount}',
                result: 'p'
            }
        }
    },
    'loaded dice': {
        materials: [
            { name: 'smooth dice', amount: 3, isItem: true },
            { name: 'hard wax', amount: 3, isItem: true },
            { name: 'oil', amount: 3, isItem: true },
            { name: 'glue', amount: 1, isItem: true }
        ],
        options: {
            'price for smooth dices': {
                p: '[smooth dice] * 3 * {amount}',
                result: 'p'
            },
            'price for hard waxes': {
                p: '[hard wax] * 3 * {amount}',
                result: 'p'
            },
            'price for oils': {
                p: '[oil] * 3 * {amount}',
                result: 'p'
            },
            'price for glues': {
                p: '[glue] * {amount}',
                result: 'p'
            }
        }
    },
    'super smoothie': {
        materials: [
            { name: 'neonberry', amount: 3 },
            { name: 'star jelly', amount: 3, isItem: true },
            { name: 'purple potion', amount: 3, isItem: true },
            { name: 'tropical drink', amount: 6, isItem: true }
        ],
        options: {
            'price for star jellies': {
                p: '[star jelly] * 3 * {amount}',
                result: 'p'
            },
            'price for purple potions': {
                p: '[purple potion] * 3 * {amount}',
                result: 'p'
            },
            'price for tropical drinks': {
                p: '[tropical drink] * 6 * {amount}',
                result: 'p'
            }
        }
    },
    'turpentine': {
        materials: [
            { name: 'super smoothie', amount: 10, isItem: true },
            { name: 'caustic wax', amount: 10, isItem: true },
            { name: 'star jelly', amount: 100, isItem: true },
            { name: 'honeysuckle', amount: 1000 }
        ],
        options: {
            'price for super smoothies': {
                p: '[super smoothie] * 10 * {amount}',
                result: 'p'
            },
            'price for caustic waxes': {
                p: '[caustic wax] * 10 * {amount}',
                result: 'p'
            },
            'price for star jellies': {
                p: '[star jelly] * 100 * {amount}',
                result: 'p'
            },
            'price for honeysuckles': {
                p: '[honeysuckle] * 1000 * {amount}',
                result: 'p'
            }
        }
    }
};

const baseItems = {
    'strawberry': 0,
    'blueberry': 0,
    'pineapple': 0,
    'sunflower seed': 0,
    'coconut': 0,
    'honeysuckle': 0,
    'neonberry': 0,
    'bitterberry': 0,
    'magic bean': 0,
    'whirligig': 0
};

const imageMap = {
    'red extract': 'images/Red_Extract.webp',
    'blue extract': 'images/Blue_Extract.webp',
    'enzyme': 'images/Enzymes.webp',
    'oil': 'images/Oil.webp',
    'gumdrop': 'images/Gumdrops.webp',
    'glue': 'images/Glue.webp',
    'tropical drink': 'images/Tropical_Drink.webp',
    'moon charm': 'images/Moon_Charm.webp',
    'glitter': 'images/Glitter.webp',
    'star jelly': 'images/Star_Jelly.webp',
    'purple potion': 'images/Purple_Potion.webp',
    'soft wax': 'images/Soft_Wax.webp',
    'hard wax': 'images/Hard_Wax.webp',
    'swirled wax': 'images/Swirled_Wax.webp',
    'caustic wax': 'images/Caustic_Wax.webp',
    'field dice': 'images/Field_Dice.webp',
    'smooth dice': 'images/Smooth_Dice.webp',
    'loaded dice': 'images/Loaded_Dice.webp',
    'super smoothie': 'images/Super_Smoothie.webp',
    'turpentine': 'images/Turpentine.webp',
    'strawberry': 'images/Strawberry.webp',
    'blueberry': 'images/Blueberry.webp',
    'pineapple': 'images/Pineapple.webp',
    'sunflower seed': 'images/Sunflower_Seed.webp',
    'coconut': 'images/Coconut.webp',
    'honeysuckle': 'images/Honeysuckle.webp',
    'neonberry': 'images/Neonberry.webp',
    'bitterberry': 'images/Bitterberry.webp',
    'magic bean': 'images/Magic_Bean.webp',
    'whirligig': 'images/Whirligig.webp',
    'royal jelly': 'images/Royal_Jelly.webp'
};

let priceCache = {};

const ROYAL_JELLY_PRICE = 10000000;

function getMaterialsBreakdown(itemName, amount, visited = new Set()) {
    if (visited.has(itemName)) {
        return []; 
    }
    visited.add(itemName);

    const formula = formulas[itemName];
    if (!formula) {
        return [];
    }

    const breakdown = [];
    
    for (const material of formula.materials) {
        const materialAmount = material.amount * amount;
        const materialEntry = {
            name: material.name,
            amount: materialAmount,
            isItem: material.isItem || formulas[material.name] || false,
            children: []
        };

        if (materialEntry.isItem && formulas[material.name]) {
            materialEntry.children = getMaterialsBreakdown(material.name, materialAmount, new Set(visited));
        }

        breakdown.push(materialEntry);
    }

    return breakdown;
}

function calculateItemCost(itemName, amount, royalJellyPrice, option = null, visited = new Set(), includeBreakdown = false) {
    if (visited.has(itemName)) {
        return includeBreakdown ? { cost: 0, breakdown: [] } : 0; // Prevent infinite recursion
    }
    visited.add(itemName);

    const formula = formulas[itemName];
    if (!formula) {
        // Base item, no cost
        return includeBreakdown ? { cost: 0, breakdown: [] } : 0;
    }

    if (option && formula.options[option]) {
        const cost = evaluateOptionFormula(formula.options[option], itemName, amount, royalJellyPrice, visited);
        if (includeBreakdown) {
            const breakdown = [{ 
                name: option.replace('price for ', ''), 
                amount: amount, 
                cost, 
                isOption: true 
            }];
            return { cost, breakdown };
        }
        return cost;
    }

    let totalCost = 0;
    const breakdown = [];
    
    for (const material of formula.materials) {
        const materialAmount = material.amount * amount;
        let materialCost = 0;
        let materialBreakdown = [];

        if ((material.isItem || formulas[material.name]) && formulas[material.name]) {
            const result = calculateItemCost(material.name, materialAmount, royalJellyPrice, null, new Set(visited), includeBreakdown);
            if (includeBreakdown && typeof result === 'object') {
                materialCost = result.cost;
                materialBreakdown = result.breakdown;
            } else {
                materialCost = result;
            }
        } else if (material.name === 'royal jelly') {
            materialCost = royalJellyPrice * materialAmount;
        } else {
            materialCost = 0;
        }

        totalCost += materialCost;
        
        if (includeBreakdown && materialCost > 0) {
            breakdown.push({
                name: material.name,
                amount: materialAmount,
                cost: materialCost,
                isItem: material.isItem || formulas[material.name],
                subBreakdown: materialBreakdown
            });
        }
    }

    if (includeBreakdown) {
        return { cost: totalCost, breakdown };
    }
    return totalCost;
}

function evaluateOptionFormula(optionFormula, itemName, amount, royalJellyPrice, visited) {
    const vars = {};
    
    for (const [key, value] of Object.entries(optionFormula)) {
        if (key !== 'result' && typeof value === 'number') {
            vars[key] = value;
        }
    }
    
    for (const [key, value] of Object.entries(optionFormula)) {
        if (key !== 'result' && typeof value === 'string') {
            let expr = value;
            
            expr = expr.replace(/\{royal jelly price\}/g, royalJellyPrice);
            
            expr = expr.replace(/\{amount\}/g, amount);

            expr = expr.replace(/\[([^\]]+)\]/g, (match, item) => {
                return calculateItemCost(item, 1, royalJellyPrice, null, new Set(visited));
            });

            expr = expr.replace(/\(([^)]+)\)/g, (match, item) => {
                return calculateItemCost(item, 1, royalJellyPrice, null, new Set(visited));
            });
            
            for (const [varName, varValue] of Object.entries(vars)) {
                const regex = new RegExp(`\\b${varName}\\b`, 'g');
                expr = expr.replace(regex, varValue);
            }
            
            try {
                vars[key] = Function('"use strict"; return (' + expr + ')')();
            } catch (e) {
                console.error('Error evaluating expression:', expr, e);
                vars[key] = 0;
            }
        }
    }
    
    const resultVar = optionFormula.result;
    if (typeof resultVar === 'string' && vars[resultVar] !== undefined) {
        return vars[resultVar];
    }
    
    return 0;
}

function renderMaterialsBreakdown(breakdown, level = 0) {
    if (!breakdown || breakdown.length === 0) return '';
    
    let html = '<ul class="materials-list">';
    breakdown.forEach(item => {
        const indent = level * 30;
        const isCraftable = item.isItem;
        html += `<li class="material-item ${isCraftable ? 'craftable' : ''}" style="margin-left: ${indent}px;">`;
        html += `<span class="material-name">${item.amount.toLocaleString()} ${item.name}</span>`;
        html += '</li>';
        
        if (item.children && item.children.length > 0) {
            html += renderMaterialsBreakdown(item.children, level + 1);
        }
    });
    html += '</ul>';
    return html;
}

document.addEventListener('DOMContentLoaded', function() {
    const itemSelect = document.getElementById('itemSelect');
    const amountInput = document.getElementById('amountInput');
    const calculateBtn = document.getElementById('calculateBtn');
    const resultBox = document.getElementById('result');
    const itemsGrid = document.getElementById('itemsGrid');

    const allItems = Object.keys(formulas).concat(Object.keys(baseItems));
    allItems.forEach(itemName => {
        const imageName = imageMap[itemName];
        if (imageName) {
            const itemCard = document.createElement('div');
            itemCard.className = 'item-card';
            itemCard.innerHTML = `
                <img src="${imageName}" alt="${itemName}" onerror="this.style.display='none'">
                <div class="item-name">${itemName}</div>
            `;
            itemCard.addEventListener('click', () => {
                itemSelect.value = itemName;
                itemSelect.dispatchEvent(new Event('change'));
            });
            itemsGrid.appendChild(itemCard);
        }
    });

    calculateBtn.addEventListener('click', function() {
        const itemName = itemSelect.value;
        const amount = parseInt(amountInput.value) || 1;

        if (!itemName) {
            alert('Please select an item');
            return;
        }

        priceCache = {};

        const totalCost = calculateItemCost(itemName, amount, ROYAL_JELLY_PRICE);

        const materialsBreakdown = getMaterialsBreakdown(itemName, amount);

        let materialsHtml = '';
        if (materialsBreakdown.length > 0) {
            materialsHtml = '<div class="materials-section"><h4>Required Materials:</h4>';
            materialsHtml += renderMaterialsBreakdown(materialsBreakdown);
            materialsHtml += '</div>';
        }

        resultBox.innerHTML = `
            <h3>💰 ${itemName.charAt(0).toUpperCase() + itemName.slice(1)}</h3>
            <div class="calculation-info">
                <p><strong>Amount:</strong> ${amount.toLocaleString()}</p>
            </div>
            ${materialsHtml}
            <div class="total-cost">
                <span class="total-label">Total Cost:</span>
                <span class="total-value">${totalCost.toLocaleString()} honey</span>
            </div>
        `;
        resultBox.classList.add('show');
    });
});

