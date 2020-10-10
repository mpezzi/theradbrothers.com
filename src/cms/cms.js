import CMS from 'netlify-cms-app';

import DraughtPreview from './templates/DraughtPreview';
import BottlePreview from './templates/BottlePreview';
import CocktailPreview from './templates/CocktailPreview';
import EventPreview from './templates/EventPreview';
import FoodPreview from './templates/FoodPreview';

CMS.registerPreviewTemplate('draught', DraughtPreview);
CMS.registerPreviewTemplate('bottle', BottlePreview);
CMS.registerPreviewTemplate('cocktail', CocktailPreview);
CMS.registerPreviewTemplate('event', EventPreview);
CMS.registerPreviewTemplate('food', FoodPreview);
