<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreDaoRequest;
use App\Http\Requests\UpdateDaoRequest;
use App\Models\Dao;
use Inertia\Inertia;

class DaoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Dao/DaoIndex/DaoIndex', [
            'daos' => Dao::with('members')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreDaoRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($dao_id)
    {
        $dao = Dao::with('members')->find($dao_id);

        if (!$dao) {
            return redirect()->route('dao.index')->with('error', 'DAO not found!');
        }


        // Accessing pivot columns
        foreach ($dao["members"] as $member) {
            $email = $member->pivot->email;
            $role = $member->pivot->role;
            $share = $member->pivot->share;
            $from = $member->pivot->from;
        }

        return Inertia::render('Dao/DaoShow/DaoShow', ['dao' => $dao]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Dao $dao)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateDaoRequest $request, Dao $dao)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Dao $dao)
    {
        //
    }
}
