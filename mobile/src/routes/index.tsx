import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Onboard, FilmsList, FilmsDetail } from '@src/pages';
import { Navigations } from '@src/styles';
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '@src/store/Model';
import { ButtonLink } from '@src/components/UI';
import { metrics } from '@src/theme';
import IconArrowLeft from '@src/assets/Icons/IconArrowLeft.svg';
import { onboardCheckOutRequest } from '@src/store/modules/Onboard/actions';
const Stack = createStackNavigator();
export const Routes: React.FC = () => {
  const dispatch = useDispatch();
  const onboard = useSelector((state: GlobalState) => state.onboard);
  return (
    <Stack.Navigator screenOptions={Navigations.screenOptions}>
      {onboard.checked
        ? (
          <React.Fragment>

            <Stack.Screen
              name='FilmsList'
              component={FilmsList}
              options={{
                title: 'Filmes',
                headerLeft: () =>
                  <ButtonLink
                    style={{ padding: metrics.large }}
                    IconSVG={IconArrowLeft}
                    onHandleButtonLink={() => dispatch(onboardCheckOutRequest())}
                  />

              }}
            />
            <Stack.Screen
              name='FilmsDetail'
              component={FilmsDetail}
              options={{ title: 'Detalhes' }}
            />
          </React.Fragment>

        )
        : (

          <Stack.Screen
            name='Onboard'
            component={Onboard}
            options={{ title: '' }}
          />
        )}
    </Stack.Navigator>
  );
}
