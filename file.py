def get_power(poke_players, pokedex, player_id):
    player_name = poke_players[player_id]
    power = 0
    for p in poke_players[1].keys():
        player_power += pokedex[p]['attack']+pokedex[p]['defense']
        print (player_name)
    return power

